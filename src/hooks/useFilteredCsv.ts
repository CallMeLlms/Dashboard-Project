import { useCsvData } from "@/context/CsvDataProvider";
import { useMemo } from "react";

export const UseFilteredCsv = () => {
  const { csvData, loading } = useCsvData();

    // Format by gender hardCoded for testing
  const filteredGender = csvData
    .filter((elem) => elem.Gender === "Male")
    .map((elem) => elem.Gender).length;

  console.log("Filtered Males", filteredGender);

  return {
    filteredGender,
  };
};
