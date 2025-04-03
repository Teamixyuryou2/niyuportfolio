import Navbar from "../components/navbar"
import Image from "next/image"


export default function PortfolioPage(){
    return(
        <div className={`items-center justify-items-center h-screen min-w[200px] w-full font-[family-name:var(--font-geist-sans)] text-white ` }>

            
            <div className="sticky top-0 z-40 w-full h-[3em] text-sm">
                <Navbar />
            </div>
            <div className="flex flex-col md:flex-row justify-center items=center py-[5vh] px-[10vw] w-full h-full gap-3">
                <div className=" flex flex-col items-end bg-white w-full h-screen text-black gap-3 transtional-all transform duration-500 ease-in-out">
            
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                    
                </div>
                <div className=" hidden md:block flex flex-col items-end bg-white w-full h-screen text-black gap-3 transtional-all transform duration-500 ease-in-out">
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                        <Image src={"/assets/W_Corp.png"}  layout="responsive" alt="Loading" width={800} height={400} className="brightness-50 hover:brightness-100 hover:scale-110 hover:z-50 transition-all transform duration-500 ease-in-out"/>
                    
                </div>               
            </div>
            <div className="flex h-[100px] w-full">
                asdasdas
            </div>
        </div>
    )
}