import { createContext, ReactNode, useState, useEffect } from "react";

type CsvDataContextProps = {
  children: ReactNode;
};

type CsvDataContextType = {
  csvData: any[];
  loading: boolean;
};

export const CSV_CONTEXT = createContext<CsvDataContextType | undefined>(
  undefined
);

export const CsvDataContext = ({ children }: CsvDataContextProps) => {
  const [csvData, setCsvData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const response = await fetch("api/parse-csv");
        if (!response.ok) {
          throw new Error("Failed to fetch CSV");
        }
        const data = await response.json();
        setCsvData(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCsvData();
  }, []);

  return (
    <CSV_CONTEXT.Provider value={{ csvData, loading }}>
      {children}
    </CSV_CONTEXT.Provider>
  );
  
};
