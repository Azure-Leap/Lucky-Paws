import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faChevronRight} from '@fortawesome/free-solid-svg-icons'


export default function Breadcrumbs({breadCrumbs}:any):JSX.Element{
  return (        
    <nav className="container mx-auto my-3 flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex gap-2 items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-blue-600">
            <FontAwesomeIcon icon={faHouse}/>
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight}/>
        </li>
        {breadCrumbs?.map((e:any,idx:number)=>(
            <li key={idx} className="inline-flex gap-2 items-center">
            <Link href={e.link} className="inline-flex items-center text-sm font-bold text-black hover:text-blue-600">
                {e.name}
            </Link>
            {breadCrumbs?.length - 1 !== idx && <FontAwesomeIcon icon={faChevronRight}/>}
            </li>
        ))}
      </ol>
    </nav>
  )
}
