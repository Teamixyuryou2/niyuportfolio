'use client'
import { useEffect , useState} from 'react'


export default function LoadingScreen(){
    const [text, setText] = useState("◯ ▢ ✖ △")

    const items = ['△ ○ ▢ ✖' , '✖ △ ◯ ▢', '▢ ✖ △ ◯', '◯ ▢ ✖ △']
    let index = 0;

    useEffect(()=>{

        const timer = setInterval(() => {
            index = (index + 1) % items.length;
            setText(items[index]);
        }, 500);

        return () => clearInterval(timer);

    },[])

    return(
        <div className = "flex w-full h-full bg-black text-3xl justify-center items-center select-none">
            {text}
        </div>
    )
}