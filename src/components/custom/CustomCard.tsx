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

type CustomCardCompTypes = {

}


export default function CustomCardComp({}) {

      const [studData, setStudData] = useState<any>([]);
    
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

    //   Use memo for this 1
      const handleData = useMemo(() => {
        const totalHoursStudied = studData.reduce((total: number, item: any) => total + item.Hours_Studied, 0)
        return totalHoursStudied
      }, [studData])

        

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{studData.length > 0 ? Object.keys(studData[0])[0] : 'No Data'}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>{handleData}</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </>
    )
}