import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube,faFigma,faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";

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
    { name: '89800332' },
    { name: 'maito:lucky_paws@gmail.com' },
    { name: 'Media Kit' },
    { name: 'M-Stars Hub, Ulaanbaatar, Mongolgia' },
  ]
  return (
    <div className='footer '>
        <div className='grid grid-cols-3 mx-auto max-w-7xl  sm:px-6 lg:px-8s'>
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
              <h3>Menu</h3>
              {navigation.map((item) => (
                      
                      <a
                        key={item.name}
                        href={item.href}
                        className='row row-1'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

            </div>
            <div>Product</div>
            <div>New</div>
        </div>
        <div className='mx-32'>Contact Us</div>

        </div>
        <hr />
    </div> 
  )
}

export default Footer