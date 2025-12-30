"use client"
import { useState, useEffect } from "react";
import DrawernNavigation from "@/components/sidebar/DrawerNav";
import { Button } from "@/components/ui/button"
import CustomCardComp from "@/components/chart/CustomCard";
import ChartAreaDefault from "@/components/chart/CardChart";
import { ChartBarMixed } from "@/components/chart/BarChart";
import { UseFilteredCsv } from "../hooks/useFilteredCsv";
import { Header } from "@/components/header/Header";

export default function Home() {
  const [openDrawerNav, setOpenDrawerNav] = useState<boolean>(false);
  // Testing
  // console.log(UseFilteredCsv());
  
  const repeat = 3
  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      <div className="">
          <DrawernNavigation
            isOpen={openDrawerNav}
            setIsOpen={setOpenDrawerNav}
          />
      </div>

      {/* Main Content */}
      <div className="pl-12 flex flex-col flex-1">
        <Header/>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto mt-2 mr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example widgets */}
            {/* Widgest compomnents */}


            {[...Array(repeat)].map((_, i) => (
              <CustomCardComp key={i} />
            ))}


            {/* <ChartBarMixed/>

            <ChartAreaDefault/> */}
          </div>
            {/* <TestingComponent/> */}
        </main>
      </div>
    </div>

  );
}
