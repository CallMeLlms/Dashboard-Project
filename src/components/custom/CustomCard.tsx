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


export default function CustomCardComp({ }) {

  const [studData, setStudData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('api/parse-csv')
        const data = await response.json();
        setStudData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData();
  }, [])

  //   Use memo for this 1
  const handleData = useMemo(() => {
    const totalHoursStudied = studData.reduce((total: number, item: any) => total + item.Hours_Studied, 0)
    return totalHoursStudied
  }, [studData])

  // const handleTitleData =  async () => {
  //     const title = Object.keys(studData[0])
  //     return title
  // }

  // console.log(handleTitleData())

  return (
    <>
      <Card className="border-2 border-[rgb(200,200,200)]">
        <CardHeader>
          <CardTitle
            className="text-2xl font-bold"
          >{studData === 'Hours_Studied' ? "Hours Studied" : <SkeletonMedium />}</CardTitle>

          <CardDescription className="text-md font-medium">Hours Dedicated</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{handleData}</p>
        </CardContent>
        <CardFooter>

        </CardFooter>
      </Card>
    </>
  )
}