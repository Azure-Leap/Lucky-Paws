import React from 'react'
import ShopCard from './ShopCard'
import Advertisement from './Advertisement'

const Shop = () => {
  return (
    <div className='m-24 grid grid-cols-4 gap-5 '>
      <div className='xl:col-span-3 lg:w-full sm:col-span-4 max-sm:col-span-4 '>
      <ShopCard/>
      </div>
      <div className='col-span-1 m-15 hidden xl:block'>
      <Advertisement/>
      </div>
    </div>
  )
}

export default Shop
