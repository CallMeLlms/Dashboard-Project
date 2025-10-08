"use client"

import { useEffect } from "react"
import { CallAPI } from "@/app/utils/nameParse";



export default function () {
    


    useEffect(() => {
        const testCall = async () => {
            const data = await CallAPI();
            console.log(data);
        }
        testCall();
    }, [])
    
    return (
        <>


        </>
    )


}