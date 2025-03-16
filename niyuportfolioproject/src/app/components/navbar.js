

export default function Navbar(){
    return(
        <div className = "flex justify-center grid grid-flow-col grid-cols-[.5fr_.5fr] lg:grid-cols-[.3fr_.4fr_.3fr] w-full bg-stone-400 h-full  px-5 gap-2 ">
            <div className = "hidden lg:block flex justify-start items-center">

            </div>

            <div className = "flex flex-row justify-center items-center text-[1.4rem] font-bold">
                N I Y U
            </div>

            <div className = "hidden md:block md:flex flex-row justify-end items-center gap-3 ">
                <div>
                    Contact
                </div>
                <div>
                    Portfolio
                </div>
                <div>
                    About Me
                </div>
            </div>

            <div className = "block md:hidden flex justify-end items-center gap-3 justify-center text-[1.4rem]">
                ☰
            </div>

        </div>
    )
}