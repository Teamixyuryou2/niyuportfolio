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

      <div className="items-center justify-items-center h-full w-full font-[family-name:var(--font-geist-sans)] text-white">

        <div className="sticky top-0 z-50 w-full h-[3em] text-sm">
            <Navbar/>
        </div>

        <div className="flex h-screen max-h-[1080px] justify-center items-center text-[1.2rem]">
          . . _ To Explore Beyond _ . .
        </div>

        <div className="grid grid-rows-[.3fr_.5fr_.4fr] h-full w-full items-center bg-stone-900">

{/* Carasol */}
          <div className="flex justify-center items-center h-full w-full by-2 bg-stone-900 overflow-x-hidden">
              <HorizontalDisplay/>
          </div>
{/* Carasol */}

          <div className="flex flex-row h-full w-full justify-center items-center py-2 bg-stone-800">
            <div>
              a
            </div>
   
          </div>

          <div className="flex h-full w-full by-2 bg-stone-900">
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
