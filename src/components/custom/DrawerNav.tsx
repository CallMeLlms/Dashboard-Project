"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, Home, Settings, BarChart3, Users } from "lucide-react"

type DrawerTypes = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerNavigation({ isOpen, setIsOpen }: DrawerTypes) {
    
    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Analytics", href: "/analytics", icon: BarChart3 },
        { name: "Users", href: "/users", icon: Users },
        { name: "Settings", href: "/settings", icon: Settings },
    ]

    return (
        <div 
            className={`
                relative h-full bg-slate-950 rounded-2xl transition-all duration-300 ease-in-out
                ${isOpen ? 'w-[280px]' : 'w-[80px]'}
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
                    
                    {/* Navigation Items */}
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`
                                    cursor-pointer p-2.5 rounded-lg text-white 
                                    hover:bg-[rgba(241,245,249,0.18)] 
                                    transition-all duration-300
                                    flex items-center gap-3
                                    ${!isOpen && 'justify-center'}
                                `}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                <span 
                                    className={`
                                        text-md font-medium whitespace-nowrap
                                        transition-all duration-300
                                        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'}
                                    `}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Footer - User Profile (Optional) */}
                <div className="mt-auto p-4 border-t border-slate-800">
                    <div className={`
                        flex items-center gap-3 text-white
                        ${!isOpen && 'justify-center'}
                    `}>
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold">U</span>
                        </div>
                        <div 
                            className={`
                                transition-all duration-300
                                ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'}
                            `}
                        >
                            <p className="text-sm font-medium whitespace-nowrap">User Name</p>
                            <p className="text-xs text-slate-400 whitespace-nowrap">user@email.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}