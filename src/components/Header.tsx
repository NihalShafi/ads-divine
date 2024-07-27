import Image from "next/image";
import { Input } from "./ui/input";
import Link from "next/link";

function Header() {
  const links = [{ title: "Home" }, { title: "Settings" }, { title: "Help" }];
  return (

    <div className="h-screen  w-52 flex-col flex  fixed right-0 top-0  items-center justify-center px-10 bg-green-800">
    <div className="bg-yellow-600">
    <h2 className="text-xl text-white font-bold ">
        Hello world
      </h2>
    </div>
    </div>
    // <div className="flex w-full h-20  relative">
    //     <div className="flex w-full h-full  justify-between px-10 py-4">
    //   <Image width={60} height={60} src="/vercel.svg" alt="" />
    //   <div className="flex justify-center items-center">
    //     {links.map((items,index)=>(
    //         <Link href='#' className={`text-sm mx-2`}>
    //         {items.title}
    //         </Link>
    //     ))}
    //     <Input placeholder="Search here" className=" rounded-full w-[150px]" />
    //   </div>
    // </div>

    
    // </div>
  );
}

export default Header;
