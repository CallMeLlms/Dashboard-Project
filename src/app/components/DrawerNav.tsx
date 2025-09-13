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
        <div className="absolute h-full w-[80px] bg-amber-800">
            <div className="flex flex-col w-full h-full items-center">
                {navItems.map((item, index) => (
                    <div
                    key={index}
                    className=""
                    >
                        <p>
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
