// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import { useProducts } from "../../hooks/useProducts";

// const Products = () => {
//   const [products] = useProducts();
//   const router = useRouter();
//   const {} = useRouter();
//   if (router.isFallback) {
//     return <div> Loading ...</div>;
//   }

//   return (
//     <div className="bg-[#fff3d3]">
//       <Navbar />

//       <div className="m-auto container grid grid-cols-5">
//         <div className="col-span-1 bg-white sm:aspect-[10/12] md:aspect-[9/12] rounded-lg m-5">
//           <div className="text-2xl text-center font-bold m-5">Product list</div>
//           <div className="p-2">
//             <button className="font-bold">Cat</button>
//           </div>
//           <div className="p-2">
//             <button className="font-bold">Dog</button>
//           </div>
//         </div>
//         <div className="mx-auto col-span-4 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-3 p-2">
//           {products?.map((product: any, idx: number) => (
//             <Link key={idx} href={`products/${product._id}`} passHref>
//               <div className="group bg-white hover:bg-orange-100 rounded-xl m-3">
//                 <div className="sm:aspect-[12/12] md:aspect-[12/12] group ">
//                   <Image
//                     src={product.img}
//                     alt="productsPhoto"
//                     width={300}
//                     height={100}
//                     className="h-full w-full rounded-lg object-contain "
//                   />
//                   <div className=" text-xl p-1 ">{product.title}</div>
//                   <div className="p-1">{product.price}</div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//         <div className="bg-red-200 "></div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Products;
