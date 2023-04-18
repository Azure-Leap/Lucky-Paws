import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube,faFigma,faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import {faShoppingCart,faPaw,faHouse} from '@fortawesome/free-solid-svg-icons'

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
  const contactUs=[
    { name: '89800332', href: '#', current: false },
    { name: 'maito:lucky_paws@gmail.com', href: '#', current: false },
    { name: 'Media Kit', href: '#', current: false },
    { name: 'M-Stars Hub, Ulaanbaatar, Mongolgia', href: '#', current: false },
  ]
  return (
    <div>
    <div className='footer hidden w-[100vw] xl:block '>
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
              <h3>Product</h3>
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
              <h3>News</h3>
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
        <div className='mx-32'>
              <h3>Contact Us</h3>
              {contactUs.map((item) => (
                      
                      <a
                        key={item.name}
                        href={item.href}
                        className='flex p-2'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
        </div>

        </div>
        <hr />
    </div>
    <div className='xl:hidden  grid grid-cols-3 absolute bottom-0 w-[100vw] h-[10vh] bg-white'>
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