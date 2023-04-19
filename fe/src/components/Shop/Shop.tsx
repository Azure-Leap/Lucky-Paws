import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


interface IProduct {
_id:Number;
title:String;
price:Number;
img:String;
detail:String;
quantity:Number;
}
interface IProducts {
  products: IProduct[];
}

const Shop = ({products}:IProducts) => {
  return (
    <div className='grid grid-cols-4 bg-orange-300 w-[60vw] h-[50vh] mx-auto rounded-3xl'>
      <div className=" container mx-auto">
        <div className="grid grid-cols-4 container">
        {/* <Link href={"#"} passHref>
                <div  className="group card  hover:bg-slate-200">
                  <div className="aspect-[9/12]  group ">
                    <Image
                      src=""
                      alt="productsPhoto"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded"
                    />
                  <div className=" text-2xl p-5 ">test</div>
                   <div>test</div>
                  </div>
                  Read more...
                </div>
              </Link> */}
          {
            products?.map((product, idx) => (
              <Link href={`products/${product._id}`} passHref>
                <div key={idx} className="group card  hover:bg-slate-200">
                  <div className="aspect-[9/12]  group ">
                    <Image
                      src={product.img || ""}
                      alt="productsPhoto"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded"
                    />
                  <div className=" text-2xl p-5 ">{product.title}</div>
                   <div>{product.price}</div>
                  </div>
                  Read more...
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
export async function getStaticProps(ctx: any) {
  const result = await fetch(
    `http://localhost:8000/products`)
  const data = await result.json();
  console.log(data);
  return { props: { products: data.products} };
}