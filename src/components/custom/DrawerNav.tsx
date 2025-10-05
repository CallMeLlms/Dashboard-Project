"use client"

import { ChevronLeft, ChevronRight, Home, Settings, BarChart3, Users } from "lucide-react"

type DrawerTypes = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerNavigation({ isOpen, setIsOpen }: DrawerTypes) {
    
    const navItems = [
        { name: "Home", href: "#", icon: Home },
        { name: "Analytics", href: "#", icon: BarChart3 },
        { name: "Users", href: "#", icon: Users },
        { name: "Settings", href: "#", icon: Settings },
    ]

    return (
        <div 
            className={`relative h-full bg-slate-950 rounded-2xl transition-all duration-300 ease-in-out`}
        >
            {/* Toggle Button */}


            <div className="flex flex-col w-full h-full">
                <div className="flex gap-2 p-4 flex-col">
                    {/* Header */}
                    <div className={`mb-6 overflow-hidden transition-all duration-300`}>
                        <h1 className={`text-md font-bold text-white whitespace-nowrap`}>
                            Student Dashboard
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}