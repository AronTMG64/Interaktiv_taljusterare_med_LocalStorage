import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [num, setnum] = useState(0)

  useEffect(() => {
    const number:number = parseInt(window.localStorage.getItem('num')!);
    number ? setnum(number) : setnum(0);
  }, []);

  return (
    <main className=' h-screen flex justify-center items-center flex-col'>
      <h1 className=' text-4xl'>{num}</h1>
      <div>
        <button className=' w-12 h-8 text-center text' onClick={() => { setnum(n => n + 1); window.localStorage.setItem('num', num.toString()) }}>Add</button>
        <button className=' w-16 h-8 text-center text' onClick={() => { setnum(n => n - 1); window.localStorage.setItem('num', num.toString()) }}>Subtract</button>
      </div>
    </main>
  )
}
