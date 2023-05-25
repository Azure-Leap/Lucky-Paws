import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useProducts } from "../../hooks/useProducts";

const ShopCard = () => {
  const {products} = useProducts();

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    pressed: {
      scale: 0.98,
    },
  };

  return (
    <div className="bg- rounded-3xl ">
      <div className="  ">
        <div className="grid xl:grid-cols-4 sm:grid-cols-3 md:grid-cols-3  max-sm:grid-cols-1 p-2">
          {products?.slice(0, 7).map((product: any, idx: number) => (
            <Link key={idx} href={`products/${product._id}`} passHref>
              <motion.div className="group bg-white hover:scale-110  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl m-3 "
                whileHover="hover"
                whileTap="pressed"
                variants={cardVariants}
              >
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
              </motion.div>
            </Link>
          ))}
          <Link href={`products`} passHref className="m-auto">
            <motion.div className="bg-orange-400 max-sm:h-20 max-sm:w-32 md:h-32 md:w-32 text-white text-lg flex justify-center rounded-full hover:bg-orange-400"
              whileHover="hover"
              whileTap="pressed"
              variants={cardVariants}
            >
              <div className="self-center">View More</div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-1 self-center mt-[2px]"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
