import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useProducts } from "../../hooks/useProducts";

const ShopCard = () => {
  const [products] = useProducts();
  return (
    <div className="bg- rounded-3xl ">
      <div className="  ">
        <div className="grid xl:grid-cols-4 sm:grid-cols-3 md:grid-cols-3  max-sm:grid-cols-1 p-2">
          {products?.slice(0, 7).map((product: any, idx: number) => (
            <Link key={idx} href={`products/${product._id}`} passHref>
              <div className="group bg-white hover:scale-110  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl m-3 ">
                <div className="sm:aspect-[12/12] md:aspect-[12/12] group grid grid-cols-2">
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 ">
                    <Image
                      src={product.imgList[0].src.toString()}
                      alt="productsPhoto"
                      width={300}
                      height={100}
                      className="h-[200px] w-full rounded-lg object-contain "
                    />
                  </div>
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2  mx-2">
                    <div className=" max-sm:text-2xl sm:text-2xl md:text-xl">
                      {product.title}
                    </div>
                    <div className="font-bold">₮ {product.price}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <Link href={`products`} passHref className="m-auto">
            <div className="max:sm:bg-orange-200  lg:bg-orange-400 md:h-48 md:w-40 rounded-full hover:bg-orange-400 text-center m-auto flex text-white text-2xl sm:h-12 max-sm:h-12">
              <div className="text-center m-auto">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="text-center m-auto max-sm:hidden sm:hidden lg:block ">
                More
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
