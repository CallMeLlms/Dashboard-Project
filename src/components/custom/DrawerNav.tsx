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
            className={`
                relative h-full bg-slate-950 rounded-2xl transition-all duration-300 ease-in-out
                ${isOpen ? 'left-[0]' : 'left-[-160]'}
            `}
        >
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-3 top-8 bg-slate-950 border-2 border-slate-800 rounded-full p-1 hover:bg-slate-800 transition-colors z-10"
            >
                {isOpen ? (
                    <ChevronLeft className="w-4 h-4 text-white" />
                ) : (
                    <ChevronRight className="w-4 h-4 text-white" />
                )}
            </button>

            <div className="flex flex-col w-full h-full">
                <div className="flex gap-2 p-4 flex-col">
                    {/* Header */}
                    <div className={`mb-6 overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <h1 className={`text-md font-bold text-white whitespace-nowrap ${!isOpen && 'invisible'}`}>
                            Student Dashboard
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}