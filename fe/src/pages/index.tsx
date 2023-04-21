import Image from 'next/image'
import Test from './test'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Story from '@/components/Story/Story'
import Shop from '@/components/Shop/Shop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <Test/>
    </main>
  )
}
