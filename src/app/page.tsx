"use client"

import { useState, useEffect } from "react";
import DrawerNavigation from "@/components/custom/DrawerNav";
import { Button } from "@/components/ui/button"
import CustomCardComp from "@/components/custom/CustomCard";
import ChartAreaDefault from "@/components/custom/CardChart";
import { ChartBarMixed } from "@/components/custom/BarChart";
import { DropdownMenuCheckboxes } from "@/components/custom/DropdownMenu"

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/parseCsv')
        if (!res.ok) {
          throw new Error()
        } 
        const data = await res.json();
        console.log('rows:', data)
        console.log('first 5:', data.slice(0, 5))
      } catch(error) {
        console.error("Failed to fetch CSV from route", error)
      }
    }
    fetchData()
  }, [])

  const handleSearchClick = () => {
    console.log("Search clicked");
    // Add your search logic here
  }

  const handleNotificationClick = () => {
    console.log("Notification clicked");
    // Add your notification logic here
  }

  const repeat = 3
  
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar with smooth transition */}
      <div className="p-2 transition-all duration-300">
        <DrawerNavigation
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      </div>

      {/* Main Content - adapts to drawer width */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        {/* Header Component */}

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example widgets */}
            {[...Array(repeat)].map((_, i) => (
              <CustomCardComp key={i} />
            ))}

            {/* Uncomment for charts */}
            {/* <div className="col-span-1">
              <ChartBarMixed />
            </div>

            <div className="col-span-2">
              <ChartAreaDefault />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}