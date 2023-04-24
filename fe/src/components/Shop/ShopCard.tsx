import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useProducts } from "../../hooks/useProducts";

const ShopCard = () => {
  const [product] = useProducts();

  // const getAllPruducts = async () => {
  //   try {
  //     const result = await axios.get("http://localhost:8000/product");
  //     setProduct(result.data.product);
  //     console.log(result);
  //   } catch (err) {
  //     console.log("ERR", err);
  //   }
  // };

  // useEffect(() => {
  //   getAllPruducts();
  // }, []);

  return (
    <div className="bg-orange-200 rounded-3xl ">
      <div className="  ">
        <div className="grid xl:grid-cols-4 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {product?.slice(0, 7).map((product, idx) => (
            <Link href={`products/${product._id}`} passHref>
              <div
                key={idx}
                className="group bg-orange-100 hover:bg-orange-300 rounded-xl m-3"
              >
                <div className="sm:aspect-[12/12] md:aspect-[12/12]   group ">
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
            </Link>
          ))}
          <Link href={`products`} passHref className="m-auto">
            <div className="max:sm:bg-orange-200  lg:bg-orange-400 md:h-48 md:w-40 rounded-full hover:bg-orange-400 text-center m-auto flex text-white text-2xl sm:h-12 max-sm:h-12">
              <div className="text-center m-auto">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="text-center m-auto max-sm:hidden sm:hidden lg:block ">
                See More...
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
