"use client"

import { useState } from "react";
import DrawernNavigation from "./components/DrawerNav";
import { Button } from "@/components/ui/button"
 

export default function Home() {
  const [openDrawerNav, setOpenDrawerNav] = useState<boolean>(false);

  return (
    <div className="">
      <main className="">

        <DrawernNavigation
          setOpenDrawnerNav={setOpenDrawerNav}
        />


        {/* <Button> Oh girl its youu</Button> */}

        <p>Dashboard Projext</p>
      </main>
    </div>
  );
}
