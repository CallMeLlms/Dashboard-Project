"use client"
import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { supabase } from "@/utils/supabaseClient";
type CsvDataContextProps = {
  children: ReactNode;
};

type CsvRow = {
  [key: string]: string | number | boolean | null;
}

type CsvDataContextType = {
  csvData: CsvRow[];
  loading: boolean;
};

export const CSV_CONTEXT = createContext<CsvDataContextType | undefined>(undefined);

export const CsvDataContext = ({ children }: CsvDataContextProps) => {
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(typeof csvData);
  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const { data, error } = await supabase
          .from<any, any>("student_performance")
          .select("*");
        if (error) {
          console.error("Supabase error:", error);
        } else {
          console.log("Fetched data CONTEXT PROVIDER: ", data);
          setCsvData(data);
        }
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

// export 

export function useCsvData() {
  const context = useContext(CSV_CONTEXT);

  if (!context) {
    throw new Error("csvData, must be used within CsvdataProvider")
  }
  return context;
}
