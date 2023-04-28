import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight, faCheck ,faX} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import { useProducts } from "../../hooks/useProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";


const Product = ({ product }: any) => {
  const [count, setCount] = useState(1);
  const [products] = useProducts();
  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }  
  const addCount = () => {
    setCount(count + 1);
  };
  const subCount = () => {
    setCount(count > 1 ? -1 : -0);
  };
  const breadCrumbs = [
    { name: "Products", link: "/products" },
    { name: product.title, link: "" },
  ];

  return (
    <div className="bg-[#fff3d3]">
      <Breadcrumbs breadCrumbs={breadCrumbs}/>
      <div className=" container mx-auto my-10 p-5 mt-7 rounded-xl">
        <div className="grid grid-cols-2  bg-white m-5 rounded-3xl">
          <div className=" m-auto xl:col-span-1 sm:col-span-2 max-sm:col-span-2">
            <Image
              src={product.img}
              alt="productsPhoto"
              width={400}
              height={200}
              className="rounded-lg object-fill  "
            />
          </div>
          <div className="m-12 xl:col-span-1 sm:col-span-2 max-sm:col-span-2 ">
            <div className=" text-4xl p-1 font-bold ">{product.title}</div>
            <div className="mt-6 font-bold text-2xl">
            ₮ {product.price}
            </div>
            <div className="text-lg mt-6">In Stock  {product.inStock === 0 ? <FontAwesomeIcon icon={faX} className="text-red-500 text-xl" /> : <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/> }</div>
            <div className="mt-6 text-lg"><h2 className="text-2xl font-bold mb-3">Description:</h2> {product.detail}</div>
            <div className="font-bold text-2xl mt-6">Net Weight</div>
            <div className="mt-2 text-lg"> {product.netWeight}</div>
            <div className="font-bold text-2xl mt-6">Type </div>
            <div className="mt-2 text-lg">{product.type}</div>
            <h3 className="mt-6 font-bold text-2xl">Quantity</h3>
            <div className="mt-4 w-24 border-2 border-orange-400 border-opacity-75 md:border-opacity-50 grid grid-cols-3 rounded-full">
              <button
                onClick={subCount}
                className=" p-2 text-xl  font-bold text-orange-400 "
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <h2 className="p-2 text-center text-lg">{count}</h2>
              <button
                onClick={addCount}
                className=" p-2 text-xl  font-bold text-orange-400 "
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          <div className="grid grid-cols-6 my-12">
            <button className="bg-orange-400 rounded-lg text-white font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-white hover:text-orange-400 hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
              Add To Card
            </button>
            <Link href={`/payment`} passHref>
            <button className="bg-white rounded-lg mx-8 w-28 text-orange-400 font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-orange-400 hover:text-white hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
              Buy
            </button>
            </Link>
          </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 m-5  ">
          {products?.slice(0, 3).map((product: any, index: number) => (
            <Link key={index} href={`products/${product._id}`} passHref>
            <div key={index} className="group bg-white hover:scale-105 shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl mx-6 mt-16 max-sm:col-span-3 sm:col-span-3  md:col-span-3 lg:col-span-1 ">
              <div className="group grid grid-cols-2">
                <div className="max-sm:col-span-1 col-span-1 md:col-span-1 xl:col-span-1 ">
                  <Image
                    src={product.img}
                    alt="productsPhoto"
                    width={300}
                    height={100}
                    className="h-[200px] w-full rounded-lg object-contain "
                  />
                </div>
                <div className="max-sm:col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-1 m-auto">
                  <div className=" max-sm:text-2xl sm:text-2xl md:text-xl text-center p-1 ">
                    {product.title}
                  </div>
                  <div className="p-1">{product.price}</div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://lucky-paws-api.onrender.com/product");
  const products = await res.json();
  const ids = products?.product?.map((product: any) => product._id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://lucky-paws-api.onrender.com/product/${params.id}`
  );
  const data = await res.json();
  console.log("data:", data);

  return { props: { product: data.baraa } };
}

export default Product;
