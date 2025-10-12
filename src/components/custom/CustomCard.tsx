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
import { ParsedTitleName } from "@/app/utils/nameParse";
import { SkeletonSmall, SkeletonMedium, SkeletonLarge } from "../custom/skeletonLoader";


type CustomCardCompTypes = {

}


export default function CustomCardComp({}) {

      const [studData, setStudData] = useState<any>([]);
      const [titleParse, setTitleParsed] = useState<any>([]);


      useEffect(() => {
        const getData = async() => {
          try {
            const response = await fetch('/api/parseCsv')
              const data = await response.json();
              setStudData(data)     
          } catch(err) {
            console.log(err)
          }
        }
        getData();
      }, [])

      useEffect(() => {
        const titleParsed = async () => {
          try{
            const response = await ParsedTitleName();
            if(!response) {
              console.log("Encountered error")
            }
            setTitleParsed(response)
          } catch (err) {
            console.log(err)

          }
        }
        titleParsed();
      }, [])

    //   Use memo for this 1
      const handleData = useMemo(() => {
        const totalHoursStudied = studData.reduce((total: number, item: any) => total + item.Hours_Studied, 0)
        return totalHoursStudied
      }, [studData])

    return (
        <>
            <Card className="border-2 border-[rgb(200,200,200)]">
                <CardHeader>
                    <CardTitle
                    className="text-2xl font-bold"
                    >{titleParse[0] === 'Hours_Studied' ? "Hours Studied" : <SkeletonMedium/> }</CardTitle>
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