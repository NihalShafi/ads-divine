import Header from "@/components/Header";
import ImageGlider from "@/components/ImageGlider";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-8 mt-5 py-5">
      <div className="flex flex-col items-center justify-center  w-full h-full py-7 px-9 ">
        <div className="flex w-full ">
          <h2 className="text-3xl font-bold ">Statics</h2>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3  gap-5 w-full mt-14 h-5  ">
          <div
            style={{
              background:
                "linear-gradient(38deg, rgba(2,0,36,1) 0%, rgba(126,48,127,1) 35%, rgba(1,54,32,1) 91%)",
            }}
            className=" col-span-1 flex justify-center items-center shadow-md aspect-square  rounded-md  "
          >
            <h1 className="text-2xl  text-white font-bold">NGhastly</h1>
          </div>
          <BackgroundGradientAnimation
            containerClassName="w-full md:col-span-2 lg:col-span-3 h-full   rounded-lg"
            className="h-full"
            size="95%"
          >
            <div className="w-full  flex justify-center items-center  h-full">
              <h2 className="text-3xl text-white font-bold ">
                Hi , I am Nihal
              </h2>
            </div>
          </BackgroundGradientAnimation>
          <div className="flex items-center justify-center aspect-square ">
            <h2></h2>
          </div>
          <ImageGlider />
        </div>
      </div>
    </section>
  );
}
