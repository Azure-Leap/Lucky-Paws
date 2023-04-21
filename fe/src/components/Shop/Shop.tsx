import React from 'react'
import ShopCard from './ShopCard'
import Advertisement from './Advertisement'

const Shop = () => {
  return (
    <div className='m-10 grid grid-cols-3 '>
      <div className='col-span-2'>
      <ShopCard/>
      </div>
   <div className='grid grid-cols-2  col-span-1 m-15 sm:hidden'>
   <Advertisement/>
   </div>
    </div>
  )
}

export default Shop
