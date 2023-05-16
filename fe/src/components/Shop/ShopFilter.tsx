import React from 'react'

export const ShopFilter = ({handleTarget}:any) => {
  return (
    <div className='bg-red-200 m-3 '>
        <button onClick={handleTarget} className='hover:text-orange-300 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-1' value="645c9695d4a8fa0b9a04d3bd">All</button>
        <div>
            <button onClick={handleTarget} className='hover:text-orange-300 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-1' value="645c8e0ae049adbd7a7956e4">Dog</button>
        </div>
        <div>
            <button onClick={handleTarget} className='hover:text-orange-300 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-1' value="645c8df8e049adbd7a7956e0">Cat</button>
        </div>
        <button onClick={handleTarget} className='hover:text-orange-300 inline-flex w-full justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-1' value="645c988909354b18b57381af">Supplies</button>
    </div>
  )
}
