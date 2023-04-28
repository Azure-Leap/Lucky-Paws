import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useProducts } from "../../hooks/useProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const product1 = {
  img: [
    {
      src: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};

const Product = ({ product }: any) => {
  const [count, setCount] = useState(0);

  const [slideIndex, setSlideIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const slideRef = useRef<HTMLDivElement>(null);

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
    setCount(count - 1);
  };

  const dragStart = (n: any) => {
    setStart(n.clientX);
  };
  const dragOver = (n: any) => {
    let touch = n.clientX;
    setChange(start - touch);
  };
  // const dragEnd = (n: any) => {
  //   if (change > 0) {
  //     slideRef.current?.scrollLeft + n;
  //   } else {
  //     slideRef.current?.scrollLeft - n;
  //   }
  // };

  const plusSlides = (n: number) => {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  };

  const slideShow = (n: number) => {
    if (n > product1.img.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(product1.img.length);
    }
  };

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  const breadCrumbs = [
    { name: "Products", link: "/products" },
    { name: product.title, link: "" },
  ];

  return (
    <div className="bg-[#fff3d3]">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className=" container mx-auto my-10 p-5 mt-7 rounded-xl">
        <div className="grid grid-cols-2  bg-white m-5 rounded-3xl">
          <div className="product-page-img w-full h-auto xl:col-span-1 sm:col-span-2 max-sm:col-span-2 ">
            <div className="big-images bg-red-300  w-full relative">
              {product1.img.map((image: any, index: number) => (
                <div
                  key={index}
                  className="mySlides w-full h-full"
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <div className="numbertext absolute text-gray-500 font-bold m-3">
                    {index + 1}/{product1.img.length}
                  </div>
                  <img
                    src={image.src}
                    alt="product_image"
                    style={{ objectFit: "contain", display: "inline-block" }}
                  />
                </div>
              ))}

              <a
                className="prev absolute top-1/2 -translate-y-1/2 left-4 text-white text-4xl cursor-pointer"
                onClick={() => plusSlides(-1)}
              >
                &#10094;
              </a>
              <a
                className="next absolute top-1/2 -translate-y-1/2 right-4 text-white text-4xl cursor-pointer"
                onClick={() => plusSlides(1)}
              >
                &#10095;
              </a>
            </div>

            <div
              className="slider-img w-full h-40 overflow-scroll flex"
              draggable={true}
              ref={slideRef}
              // onDragStart={dragStart}
              // onDragOver={dragOver}
              // onDragEnd={dragEnd}
            >
              {product1.img.map((image: any, index: number) => (
                <div
                  key={index}
                  className={`slider-box w-1/3 flex-none h-full cursor-pointer inline opacity-100 ${
                    index === slideIndex
                      ? "hover:bg-violet-600 active:border-purple-700 active:border-2 focus:outline-none focus:ring focus:ring-violet-300"
                      : ""
                  }`}
                  onClick={() => setSlideIndex(index + 1)}
                >
                  <img
                    src={image.src}
                    alt=""
                    style={{
                      objectFit: "fill",
                      display: "inline-block",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="m-6  xl:col-span-1 sm:col-span-2 max-sm:col-span-2 ">
            <div className=" text-3xl p-1 font-bold ">{product.title}</div>
            <div className="mt-6">{product.detail}</div>
            <div className="mt-6 flex">
              <h3 className="font-bold">Price :</h3> {product.price}
            </div>
            <h3 className="mt-6 font-bold">Quantity :</h3>
            <div className="mt-4 w-24 border-2 border-black border-opacity-75 md:border-opacity-50 grid grid-cols-3 rounded-lg">
              <button
                onClick={subCount}
                className="bg-orange-400 p-2 text-xl rounded-s-lg font-bold text-white hover:bg-white hover:text-orange-400"
              >
                -
              </button>
              <h2 className="p-2 text-center text-lg">{count}</h2>
              <button
                onClick={addCount}
                className="bg-orange-400 p-2 text-xl  rounded-e-lg font-bold text-white  hover:bg-white hover:text-orange-400"
              >
                +
              </button>
            </div>
            <div className="grid grid-cols-6 m-8 mx-auto">
              <button className="bg-orange-400 rounded-lg m-5 text-white font-bold h-10 border-2 border-white border-opacity-75  hover:bg-white hover:text-orange-400 hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
                Add To Card
              </button>
              <button className="bg-white rounded-lg m-5 text-orange-400 font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-orange-400 hover:text-white hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
                Buy
              </button>
            </div>
          </div>
        </div>
        {/* <div className=" grid grid-cols-3 m-5 ">
          {products?.slice(0, 3).map((product: any, index: number) => (
            <div
              key={index}
              className="group bg-white hover:bg-orange-100 rounded-3xl m-3"
            >
              <div className="sm:aspect-[12/12] md:aspect-[12/12]  group ">
                <Image
                  src={product.img}
                  alt="productsPhoto"
                  width={300}
                  height={100}
                  className="h-full w-full rounded-lg object-contain "
                />
                <div className=" text-xl p-1 ">{product.title}</div>
                <div className="p-1">{product.price}</div>
              </div>
            </div>
          ))}
        </div> */}
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
