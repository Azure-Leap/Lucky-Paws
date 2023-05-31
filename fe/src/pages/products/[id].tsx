import React, { useState, useContext ,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import { useProducts } from "../../hooks/useProducts";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { CartContext } from "@/context/ShoppingCartContext";
import { UserContext } from "../../context/UserContext";

import { IProduct } from "@/utils/interfaces";

const Product = ({ product }: any) => {
  const { user}:any = useContext(UserContext)
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);

  const { products } = useProducts();
  const router = useRouter();
  const {addProductToShoppingCart,setProductToShoppingCart } = useContext(CartContext);
  const handleClick = (product: IProduct) => {
      console.log("u",user._id);
      console.log("a",product._id);
      setProductToShoppingCart(user._id);
    // if (product._id) {
    //   let newProduct = cart?.items?.length >0 ? [...cart?.items] : []
      
    //   const newFav  = {
    //     products:product,
    //     count: 1
    //   }

    //   const selectedProIProductIdx = newProduct?.findIndex( e=> e?.products?._id === product?._id)
    //   if(selectedProIProductIdx > -1){
    //     newProduct[selectedProIProductIdx].count ++
    //   } else{
    //     newProduct = [... newProduct, newFav]
    //   }
     
    //   const cardItem = {
    //     user_Id:"jhbmb",
    //     items: newProduct
    //   }
    //   setCard(cardItem);
    // }
  };

  
  const addCount = () => {
    setCount(count + 1);
  };
  
  const subCount = () => {
    setCount(count > 1 ? count - 1 : 1);
  };
  
  useEffect(() => {
    const updatedTotalPrice = count * priceTotal();
    setTotalPrice(updatedTotalPrice);
  }, [count]);
  
  const ShoppingCart = addProductToShoppingCart?.products;
  const priceTotal = () => {
    if (!ShoppingCart) return 0;
  
    return ShoppingCart.reduce(function (total: number, item: any) {
      const itemPrice = item.products.price;
      const itemQuantity = item.quantity;
      const itemTotalPrice = itemPrice * itemQuantity;
      return setTotalPrice(totalPrice + itemTotalPrice);
    }, 0);
  };
  
  // const price: number = priceTotal();

  const plusSlides = (n: number) => {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  };

  const slideShow = (n: number) => {
    if (n > product.imgList.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(product.imgList.length);
    }
  };

  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }

  const breadCrumbs = [
    { name: "Products", link: "/products" },
    { name: product.title, link: "" },
  ];

  return (
    <div className="bg-[#fff3d3]">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className=" container mx-auto my-10 p-5 mt-7 rounded-xl">
        <div className="grid grid-cols-2  bg-white m-5 rounded-3xl shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
          <div className="product-page-img w-full h-auto xl:col-span-1 sm:col-span-2 max-sm:col-span-2 ">
            <div className="big-images w-full h-3/4 relative">
              {product.imgList.map((image: any, index: number) => (
                <div
                  key={index}
                  className="mySlides w-full h-full"
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <div className="numbertext absolute text-gray-500 font-bold m-3">
                    {index + 1}/{product.imgList.length}
                  </div>
                  <Image
                    src={image.src}
                    fill
                    alt="product_image"
                    className="mx-auto object-fill"
                  />
                </div>
              ))}

              <a
                className="prev text-orange-500 absolute top-1/2 -translate-y-1/2 left-4  text-4xl cursor-pointer"
                onClick={() => {
                  plusSlides(-1);
                  console.log("Prev", slideIndex);
                }}
              >
                &#10094;
              </a>
              <a
                className="next absolute top-1/2 -translate-y-1/2 right-4 text-orange-500 text-4xl cursor-pointer"
                onClick={() => {
                  plusSlides(1);
                  console.log("Next", slideIndex);
                }}
              >
                &#10095;
              </a>
            </div>

            <div
              className="slider-img w-full h-1/4 overflow-x-scroll scrollbar-hide flex snap-x"
              draggable={true}
            >
              {product.imgList.map((image: any, index: number) => (
                <div
                  key={index}
                  className={`bg-blue-400 slider-box w-1/3 bottom-0 flex-none h-full cursor-pointer inline opacity-100 snap-end ${
                    index === slideIndex - 1 ? "border-4 border-green-500" : ""
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
            <div className="text-lg mt-6">
              In Stock{" "}
              {product.inStock === 0 ? (
                <FontAwesomeIcon icon={faX} className="text-red-500 text-xl" />
              ) : (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 text-xl"
                />
              )}
            </div>
            <div className="mt-6 text-lg">
              <h2 className="text-2xl font-bold mb-3">Description:</h2>{" "}
              {product.detail}
            </div>
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
              <button  onClick={() => handleClick(product)}  className="bg-orange-400 rounded-lg text-white font-bold h-10 border-2 border-orange-400 border-opacity-75  hover:bg-white hover:text-orange-400 hover:scale-110 xl:col-span-2 sm:col-span-2 max-sm:col-span-2">
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
        <div className=" mx-auto md:col-span-4 sm:col-span-5 max-sm:col-span-5 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2 ">
          {products?.slice(0, 3).map((product: any, index: number) => (
            <Link key={index} href={`products/${product._id}`} passHref>
              <div
                key={index}
                className="group bg-white hover:scale-105 shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl mx-6 mt-16 max-sm:col-span-3 sm:col-span-3  md:col-span-3 lg:col-span-1 "
              >
                <div className="group grid grid-cols-2">
                  <div className="max-sm:col-span-1 col-span-1 md:col-span-1 xl:col-span-1 ">
                    <Image
                      src={product.imgList[0].src}
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
                    <div className=" max-sm:p-4 sm:text-2xl md:text-xl p-1 ">
                      {product.price}
                    </div>
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
