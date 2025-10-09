"use client"

import { useEffect } from "react"
import { CallAPI } from "@/app/utils/nameParse";

export default function () {
    


    useEffect(() => {
        const testCall = async () => {
            // debugger
            const data = await CallAPI();
            console.log(`Thats 7 6 o draco${data}`);
        }
        testCall();
    }, [])
    
    return (
        <>


        </>
    )


}