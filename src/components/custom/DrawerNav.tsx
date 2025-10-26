"use client"

import { ChevronLeft, ChevronRight, Home, Settings, BarChart3, Users } from "lucide-react"

type DrawerTypes = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerNavigation({ isOpen, setIsOpen }: DrawerTypes) {

    return (
        <div
            className={`cursor-pointer absolute h-full bg-slate-950 transition-all duration-600 ease-in-out z-1 ${isOpen ? `-left-[0px]` : `-left-[150px]`}`}
            onClick={() => setIsOpen(prev => (!prev))}
        >
            {/* Toggle Button */}
            <div className={`flex flex-col w-full h-full`}>

                <div className="absolute left-38 z-1 h-full">
                    <div className="relative translate-y-100 bg-black rounded-md transition-all duration-600 ease-in-out">
                        {isOpen ? <><ChevronLeft style={{ color: "white" }} /></> : <><ChevronRight style={{ color: "white" }} /></>}
                    </div>
                </div>

                <div className="flex gap-2 p-4 flex-col">
                    {/* Header */}
                    <div className={`mb-6 overflow-hidden transition-all duration-300`}>
                        <h1 className={`text-md font-bold text-white whitespace-nowrap transition-all duration-600 ease-in-out ${isOpen ? `` : `opacity-0`}`}>
                            Student Dashboard
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}