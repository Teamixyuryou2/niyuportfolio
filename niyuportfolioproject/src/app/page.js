'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faPixiv } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/navbar";
import LoadingScreen from "./components/loadingscreen";
import HorizontalDisplay from "./components/horizontaldisplay";

export default function Home() {
  const [loading, setLoading] = useState(true)   //Loading Switch
  const [fadeOut, setFadeOut] = useState(false);  //Loading Fade
  const [isClient, setIsClient] = useState(false); //To check if we're on the client side

  /*once mounted set true, suppose to stop hydration errors*/
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out before hiding

      setTimeout(() => {
        setLoading(false); // Hide after fade-out
      }, 1000); // Make sure fade-out lasts for 1 second (1000ms)

    }, 3000); // Start fading out after 200ms

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server until the client is mounted
  }


  return (
    <div className={`items-center justify-items-center h-screen w-full font-[family-name:var(--font-geist-sans)] text-white`}>
      {loading && (<div className={`fixed w-full h-full z-50  ${fadeOut ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 overflow-hidden`}> <LoadingScreen /> </div> )} 

      <div className="items-center justify-items-center h-full w-full font-[family-name:var(--font-geist-sans)] font text-white select-none overflow-auto scrollbar-custom">
        <div className="sticky top-0 z-40 w-full h-[3em] text-sm">
          <Navbar />
        </div>

        <div className="relative flex h-screen max-h-[1080px] w-full justify-center items-center text-[1.2rem]">
          <div className="absolute inset-0 bg-bottom bg-cover opacity-20"
            style={{ backgroundImage: "url('/assets/W_Corp.png')" }}
          />
          <div className="relative z-10 text-white">. . _ To Explore Beyond _ . .</div>.
        </div>

        <div className="grid grid-rows-[.5fr_.5fr_.4fr] h-full w-full bg-stone-900">
          {/* Carousel */}
          <div className="flex flex-row justify-center items-center h-full overflow-x-hidden bg-stone-800">
            <div className="flex flex-row h-[98%] xl:h-[200px] bg-stone-900 overflow-x-hidden">
              <HorizontalDisplay />
            </div>
          </div>
          {/* Carousel */}

          <div className="flex flex-col w-full items-center bg-stone-800 gap-4">
            <div className="text-[2rem]">. VITA MEA .</div>
            <div>Illustrator / Storyborder / 3D Modeller</div>
            <div>Test</div>
          </div>

          <div className="flex h-full w-full by-2 bg-stone-900 items-center justify-center">
            asdasgg
          </div>
        </div>

        <footer className="flex flex-col p-5 gap-[24px] flex-wrap items-center justify-center">
          <div className="flex gap-4 ">
            <button className="w-[50px] h-[50px]">
              <FontAwesomeIcon icon={faTwitter} size="2x" className=" hover:text-gray-500 transition-all ease-in-out duration-600" />
            </button>
            <button className="w-[50px] h-[50px]">
              <FontAwesomeIcon icon={faPixiv} size="2x" className=" hover:text-gray-500 transition-all ease-in-out duration-600" />
            </button>
          </div>

          <div className="flex flex-col p-5 gap-[24px] flex-wrap items-center justify-center text-xs">
            © 2025 N I Y U . All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}