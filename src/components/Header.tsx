"use client";
import Image from "next/image";
import { Input } from "./ui/input";
import Link from "next/link";
import { ModeToggle } from "./DarkButton";
// import { Btn } from "./Sidebar";
import { Button } from "./ui/button";
import { LucideMenu } from "lucide-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

// import { Btn } from "./Sidebar";

function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (isSheetOpen && window.innerWidth > 1025) { // Adjust breakpoint as needed
        setIsSheetOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSheetOpen]);
  const links = [{ title: "Home" }, { title: "Settings" }, { title: "Help" }];

  return (
    <div className="flex w-full h-20  px-6 backdrop-blur-sm  sticky top-0">
      <div className="flex w-full h-full  justify-between ">
        <Image width={100} height={100} sizes="70" src="/01.svg" alt="" />
        <div className="flex justify-center items-center">
          {links.map((items, index) => (
            <Link href="#" key={index} className={`text-sm mx-2`}>
              {items.title}
            </Link>
          ))}
          <div className="flex gap-2">
            <ModeToggle />
            <Input
              placeholder="Search here"
              className=" rounded-full w-[150px]"
            />

            <Sheet>
              <SheetTrigger  onClick={() => setIsSheetOpen(true)} className="lg:hidden">
                <LucideMenu />
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px] p-0 ">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
