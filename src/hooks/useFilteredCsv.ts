import { useCsvData } from "@/context/CsvDataProvider";
import { useMemo, useEffect, useState } from "react";
import type csvType from "@/types/csvTypes";

export const UseFilteredCsv = () => {
  const { csvData, loading } = useCsvData();

  const filterByNames = useMemo(() => {
   return getAllKeys(csvData) 
  }, [csvData])

  const filterByGender = useMemo(() => {
    return getAllGender(csvData)
  }, [csvData])

   const filterByValues = useMemo(() => {
    return getAllGender(csvData)
  }, [csvData])

  return {
    filterByGender,
    filterByNames,
    filterByValues
  };
};

const getAllGender = (csvData: any) => {
  return csvData
    .filter((elem: any) => elem.Gender === "Male")
    .map((elem: any) => elem.Gender);
};

const getAllKeys = (csvData: any) => {
  for(let i in csvData) {
    return Object.keys(csvData[i]).map((item) => item.replaceAll("_", " "));
  }
}

const getAllValues = (csvData: any) => {
  for(let i in csvData) {
    return Object.values(csvData[i]);
  }
}
