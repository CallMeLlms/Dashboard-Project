"use client"

import { useEffect } from "react"
import { ParsedTitleName } from "@/app/utils/nameParse";

export default function () {
    
    useEffect(() => {
        const testCall = async () => {
            const data = await ParsedTitleName();
            console.log(`Thats 7 6 o draco${data}`);
        }
        testCall();
    }, [])
    
    return (
        <>


        </>
    )


}