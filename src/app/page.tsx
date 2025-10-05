"use client"

import { useState, useEffect } from "react";
import DrawernNavigation from "@/components/custom/DrawerNav";
import { Button } from "@/components/ui/button"
import CustomCardComp from "@/components/custom/CustomCard";
import ChartAreaDefault from "@/components/custom/CardChart";
import { ChartBarMixed } from "@/components/custom/BarChart";
import Papa from "papaparse"

export default function Home() {
  const [openDrawerNav, setOpenDrawerNav] = useState<boolean>(false);

  
  useEffect(() => {
    const burat =  async () => {
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
    burat()
  }, [])

  const repeat = 1
  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      <div className="p-2">
        <DrawernNavigation
          isOpen={openDrawerNav}
          setIsOpen={setOpenDrawerNav}
        />
      </div>

      {/* <aside className="w-64 bg-muted border-r p-4">
        <h1 className="text-xl font-bold">My Dashboard</h1>
      </aside> */}

      {/* Main Content */}
      <div className="flex flex-col flex-1">

        {/* Component */}
        {/* <header className="h-16 border-b flex items-center justify-between px-6 rounded-2xl bg-slate-950 mt-2 mr-2">
          <div className="text-white">Search / Breadcrumb</div>
          <div className="text-white">User Menu
          </div>
        </header> */}

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example widgets */}
            {/* Widgest compomnents */}

            
            {[...Array(repeat)].map((_, i) => (
              <CustomCardComp key={i} />
            ))}


            {/* <div className="col-span-1">
              <ChartBarMixed />
            </div>

            <div className="col-span-2">
              <ChartAreaDefault />
            </div> */}

            {/* <div className="rounded-2xl border p-4 shadow-sm">Card 3</div> */}
          </div>

        </main>
      </div>
    </div>

  );
}
