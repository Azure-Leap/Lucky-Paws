import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube,faFigma,faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import {faShoppingCart,faPaw,faHouse,faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Pets', href: '#', current: false },
    { name: 'Home', href: '#', current: false },
    { name: 'Shops', href: '#', current: false },
  ];
  const products=[
    { name: 'Food', href: '#', current: false },
    { name: 'Clothes', href: '#', current: false },
    { name: 'Toys', href: '#', current: false },
    { name: 'Vitamins', href: '#', current: false },
  ]
  const news=[
    { name: 'Blog', href: '#', current: false },
    { name: 'Products', href: '#', current: false },
    { name: 'Media Kit', href: '#', current: false },
    { name: 'Feature stories', href: '#', current: false },
  ]
  return (
    <div>
    <div className=' bg-white hidden w-[100vw] xl:block pt-12'>
        <div className='grid grid-cols-3 gap-24 max-w-[85vw] mx-auto sm:px-6 lg:px-8s'>
          <div>
        <div className='flex flex-shrink-0 items-center'>  
           <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                 />
                
              <Image
              src="/images/LuckyPaws.png"
              alt="logo"
              width={120}
              height={100}
              /> 
              
        </div>
          <p className='my-3 px-2'>We are a lorem ispum sit amet, consectetur adipiscing eli</p>
          <div className='flex flex-shrink-0 items-center'>
          <FontAwesomeIcon className='icon' icon={faFacebook} />
          <FontAwesomeIcon className='icon' icon={faYoutube} />
          <FontAwesomeIcon className='icon' icon={faFigma}/>
          <FontAwesomeIcon className='icon' icon={faFacebookMessenger}/>

          </div>
          </div>
        <div className='grid grid-cols-3'>
            <div>
              <h3 className='font-bold'>Menu</h3>
              {navigation.map((item) => (
                      
                      <a
                        key={item.name}
                        href={item.href}
                        className='flex'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

            </div>
            <div>
              <h3 className='font-bold'>Product</h3>
              {products.map((item) => (
                      
                      <a
                        key={item.name}
                        className='flex '
                      >
                        {item.name}
                      </a>
                    ))}

            </div>
            <div>
              <h3 className='font-bold'>News</h3>
              {news.map((item) => (
                      
                      <a
                        key={item.name}
                        href={item.href}
                        className='flex '
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

            </div>
        </div>
        <div className='mx-20'>
              <h3 className='font-bold mx-2'>Contact Us</h3>
             <p><FontAwesomeIcon icon={faPhone} className='mx-2 mt-3'/> : 89800332</p>
             <p><FontAwesomeIcon icon={faEnvelope} className='mx-2 mt-3' />maito:lucky_paws@gmail.com </p>
             <p><FontAwesomeIcon icon={faLocationDot} className='mx-2 mt-3'/>M-Stars Hub, Ulaanbaatar, Mongolgia</p>
        </div>

        </div>
        <hr className='m-5' />
        <div className='mx-[120px] grid grid-cols-3 max-w-[100vw] mt-4 text-stone-200 mb-0'>
           <p className='text-xl'>Copy Right @2023</p>
           <p className='text-2xl'>|</p>
           <p className='text-xl'>Lucky Paws</p>

        </div>
    </div>
    <div className='xl:hidden  grid grid-cols-3 w-[100vw] h-[10vh] bg-white'>
      <button
       type="button"
       className="rounded-full text-3xl p-2  hover:text-orange-500"><FontAwesomeIcon icon={faHouse} /></button>
      <button
                  type="button"
                  className="rounded-full text-3xl p-2  hover:text-orange-500"
                >
                       <FontAwesomeIcon icon={faPaw}/>
                </button>
                <button
                  type="button"
                  className="rounded-full text-3xl p-2  hover:text-orange-500"
                >
                       <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
    </div> 
    </div>
      
  )
}

export default Footer