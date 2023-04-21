import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";


interface IProduct {
_id:Number;
title:String;
price:Number;
img:string;
detail:String;
quantity:Number;
}

const ShopCard = () => {
  const [product, setProduct] = useState<IProduct[]>([]);

  const getAllPruducts=async()=>{
    try {
      const result = await axios.get("http://localhost:8000/product");
      setProduct(result.data.product);
      console.log(result);
    } catch (err) {
      console.log("ERR", err);
    }
  }
  
  useEffect(()=>{
    getAllPruducts();
  },[])
  return (
    <div className='bg-orange-200 rounded-3xl m-12 '>
      <div className=" container mx-auto  ">
        <div className="grid grid-cols-4 p-2">
          {product?.slice(0,7).map((product, idx) => (
              <Link href={`products/${product._id}`} passHref>
                <div key={idx} className="group bg-orange-100 hover:bg-orange-100 rounded-xl m-3">
                  <div className="aspect-[10/12]  group ">
                    <Image
                      src={product.img}
                      alt="productsPhoto"
                      width={300}
                      height={100}
                      className="h-full object-cover rounded-lg"
                    />
                  <div className=" text-xl p-1 ">{product.title}</div>
                   <div className='p-1'>{product.price}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ShopCard;
