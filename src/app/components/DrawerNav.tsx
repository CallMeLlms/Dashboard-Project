"use client"

import Link from "next/link"
import { useEffect } from "react"
import { DrawerNavTypes } from "./ComponentsTypes" 

type DrawerTypes = {
    setOpenDrawnerNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawernNavigation ({setOpenDrawnerNav} : DrawerTypes) {
    
    useEffect(() => {
        
    },)

    const navItems = [
        {name: "Home", href: ""},
        {name: "Other", href: ""},
        {name: "Other", href: ""},
    ]

    return (
        <>

        {/* Base 80px, mas 180px */}
        <div className="h-full w-[280px] bg-slate-950 rounded-e-xl">
            <div className="flex flex-col w-full h-full">
                <div className="flex gap-2 p-4 flex-col">

                    <div className="mb-6">
                        <h1 className="text-md font-bold text-white">Student Performance</h1>
                    </div>

                    {navItems.map((item, index) => (
                        <div
                        key={index}
                        className="cursor-pointer pl-1.5 p-0.5 rounded-sm text-white hover:bg-[rgba(241,245,249,0.18)] transition-all duration-300"
                        >
                            <p className="text-md font-bold">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
