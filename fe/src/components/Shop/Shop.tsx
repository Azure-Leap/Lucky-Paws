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
// interface IProducts {
//   products: IProduct[];
// }

const Shop = () => {
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
    <div className='bg-orange-200 w-[60vw] h-[60vh] mx-auto rounded-3xl m-32'>
      <div className=" container mx-auto  ">
        <div className="grid grid-cols-4 w-[50vw] h-[20vh] p-3.5">
          {product?.slice(0,7).map((product, idx) => (
              <Link href={`products/${product._id}`} passHref>
                <div key={idx} className="group hover:bg-orange-200">
                  <div className="aspect-[9/12]  group ">
                    <Image
                      src={product.img}
                      alt="productsPhoto"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded p-5"
                    />
                  <div className=" text-2xl p-5 ">{product.title}</div>
                   <div>{product.price}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
