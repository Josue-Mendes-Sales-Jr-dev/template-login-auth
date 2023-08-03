import { Inter } from 'next/font/google'
import "tailwindcss/tailwind.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='bg-green-500 w-screen h-[100vh] flex items-center justify-center'>
      dashboard
   </div>
  )
}
