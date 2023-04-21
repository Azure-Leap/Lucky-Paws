import Image from 'next/image'
import axios from 'axios'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Story from '@/components/Story/Story'
import Shop from '@/components/Shop/Shop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='body'>
<Navbar/>
<Story/>
<Shop/>
<Footer/>
    </div>
  )
}
