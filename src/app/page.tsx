"use client"

import { useState } from "react";
import DrawernNavigation from "./components/DrawerNav";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  const [openDrawerNav, setOpenDrawerNav] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen">
      <main className="flex h-full w-full">

        <DrawernNavigation
          setOpenDrawnerNav={setOpenDrawerNav}
        />

        <div className="flex flex-col w-full p-6">

          <div className="">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

        </div>

      </main>
    </div>
  );
}
