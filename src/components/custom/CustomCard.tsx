"use client"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";
import { SkeletonSmall, SkeletonMedium, SkeletonLarge } from "./SkeletonLoader";
import { useCsvData } from "@/context/CsvDataProvider";

export default function CustomCardComp({ }) {
  
  const {csvData, loading} = useCsvData();
  
  return (
    <>
      <Card className="border-2 border-[rgb(200,200,200)]">
        <CardHeader>
          <CardTitle
            className="text-2xl font-bold"
          >
            {/* {studData === 'Hours_Studied' ? "Hours Studied" : <SkeletonMedium />} */}
          </CardTitle>

          <CardDescription className="text-md font-medium">Hours Dedicated</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{}</p>
        </CardContent>
        <CardFooter>

        </CardFooter>
      </Card>
    </>
  )
}