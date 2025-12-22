import {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface CsvDataContextTypes {
  data: any[];
  loading: boolean;
  error: string | null;
}

const CSV_DATA = createContext<CsvDataContextTypes | undefined>(undefined);

export function CsvDataContext({ children }: { children: ReactNode }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const FetchCSVData = async () => {
      try {
        const response = await fetch("/api/parse-csv");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error");
        console.error("Error in context", err);
      } finally {
        setLoading(false);
      }
    };

    FetchCSVData();
  }, []);

  const value: CsvDataContextTypes = {data, loading, error}; 

}


export function useCsvData () {
  const context = useContext(CSV_DATA);
  
  if(!context) {
    throw new Error("csvData, must be used within CsvdataProvider")
  }

  return context;
}