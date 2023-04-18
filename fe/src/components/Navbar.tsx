import Image from "next/image";
import { Disclosure,} from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart,faPaw } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Pets', href: '#', current: false },
  { name: 'Home', href: '#', current: false },
  { name: 'Shops', href: '#', current: false },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={30}
                  height={30}
                 />
                
              <Image
              src="/images/LuckyPaws.png"
              alt="logo"
              width={120}
              height={100}
              />
                   
                </div>
                <div className="flex flex-shrink-0 items-center">


                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-orange-500 text-white text-xl' : 'text-xl text-black hover:bg-orange-500 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full text-xl p-2  hover:text-orange-500 "
                >
               <FontAwesomeIcon icon={faPaw}/>
                </button>
                <button
                  type="button"
                  className="rounded-full text-xl p-2  hover:text-orange-500 "
                >
                  <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
               <p className="p-4  text-3xl">|</p>
               <button className="font-bold text-xl m-3">
                login
               </button>
               <button className="font-bold m-3 text-xl bg-orange-500 p-2 w-32 rounded-3xl text-white">
                Sign Up
               </button>
            
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}