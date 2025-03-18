'use client'
import Image from "next/image";
import Navbar from "./components/navbar"
import LoadingScreen from "./components/loadingscreen"
import HorizontalDisplay from "./components/horizontaldisplay";
import {useState , useEffect} from 'react'

export default function Home() {

  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
  
    setTimeout(() => {
      setLoading(false);
    }, 3000);

  },[])



  return (
    
    <div className="items-center justify-items-center h-screen w-full font-[family-name:var(--font-geist-sans)] text-white">
      {loading ? <LoadingScreen/> :

      <div className="items-center justify-items-center h-full w-full font-[family-name:var(--font-geist-sans)] text-white select-none">

        <div className="sticky top-0 z-50 w-full h-[3em] text-sm">
            <Navbar/>
        </div>

        <div className="flex h-screen max-h-[1080px] justify-center items-center text-[1.2rem]">
          . . _ To Explore Beyond _ . .
        </div>

        <div className="grid grid-rows-[.5fr_.5fr_.4fr] h-full w-full bg-stone-900">

{/* Carasol */}
          <div className="flex flex-row justify-center items-center h-full justify-center items-center bg-stone-900 overflow-x-hidden bg-white">
            <div className="flex flex-row h-[98%] xl:h-[200px] bg-stone-900 overflow-x-hidden bg-white">
                <HorizontalDisplay/>
            </div>
          </div>
{/* Carasol */}

          <div className="flex flex-col w-full items-center bg-stone-800 ">

            <div className="text-[2rem]">
              . Vita Mea .
            </div>
            <div>
              Illustrator / Storyborder / 3D Modeller
            </div>
   
          </div>

          <div className="flex h-full w-full by-2 bg-stone-900 items-center justify-center">
            asdasgg
          </div>

        </div>

        <footer className="flex flex-col p-5 gap-[24px] flex-wrap items-center justify-center">
          <div>
            Twitter Pixiv 
          </div>
          <div className="flex flex-col p-5 gap-[24px] flex-wrap items-center justify-center text-xs">
            © 2025 N I Y U . All Rights Reserved.
          </div>
        </footer>

      </div>

      }
    </div>
  );
}
