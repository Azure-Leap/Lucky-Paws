import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { filter } from "lodash";

import { useProducts } from "../../hooks/useProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ShopSort from "@/components/Shop/ShopSort";
import Pagination from "../../components/Shop/Pagination";
import { timeStamp } from "console";
import { IProduct } from "@/utils/interfaces";
import { ShopFilter } from "@/components/Shop/ShopFilter";

const Products = () => {
  const { products, setProduct, getAllPruducts } = useProducts();
  const [testFilter, setTestFilter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }

  const getFilteredList = () => {
    if (selectedCategory === "645c9695d4a8fa0b9a04d3bd" || !selectedCategory) {
      return products;
    }
    return filter(products, (item: any) => {
      return item.productType.storeCategory === selectedCategory;
    });
  };

  // function handleTarget(e: any) {
  //   setSelectedCategory(e.target.value);
  // }

  const filteredList = useMemo(getFilteredList, [selectedCategory, products]);

  useEffect(() => {
    setProduct(getFilteredList);
  }, []);

  const breadCrumbs = [{ name: "Products", link: "" }];
  return (
    <div className="bg-[#fff3d3]">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="m-auto container grid grid-cols-5">
        <div className="md:col-span-1 bg-white  md:aspect-[9/12] rounded-lg m-5 sm:col-span-5 max-sm:col-span-5 shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
          <ShopSort  setSelectedCategory={setSelectedCategory}/>
          {/* <ShopFilter /> */}
          {/* <select name="category-list" className="" onChange={handleTarget}> */}
            {/* <button onClick={handleTarget} value="645c9695d4a8fa0b9a04d3bd">All</button> */}
            {/* <button onClick={handleTarget} value="645c8e0ae049adbd7a7956e4">Dog</button> */}
            {/* <button onClick={handleTarget} value="645c8df8e049adbd7a7956e0">Cat</button> */}
            {/* <button onClick={handleTarget} value="645c988909354b18b57381af">Supplies</button> */}
          {/* </select> */}
        </div>
        <div className="mx-auto md:col-span-4 sm:col-span-5 max-sm:col-span-5 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {filteredList?.map((product: any, idx: number) => (
            <Link key={idx} href={`products/${product._id}`} passHref>
              <div className="group bg-white hover:scale-110  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl m-3 ">
                <div className="sm:aspect-[12/12] md:aspect-[12/12] group grid grid-cols-2">
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 ">
                    <img
                      src={product.imgList[0].src}
                      alt="productsPhoto"
                      width={300}
                      height={100}
                      className="h-[200px] w-full rounded-lg object-contain "
                    />
                  </div>
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 text-center m-auto">
                    <div className=" max-sm:text-2xl sm:text-2xl md:text-xl p-1 ">
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
      <Pagination />
    </div>
  );
};

export default Products;
