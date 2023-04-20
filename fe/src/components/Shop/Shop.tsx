import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import { readConfigFile } from 'typescript';


// interface IProduct {
// _id:Number;
// title:String;
// price:Number;
// img:String;
// detail:String;
// quantity:Number;
// }
// interface IProducts {
//   products: IProduct[];
// }

// const Shop = ({products}:IProducts) => {
//   return (
//     <div className='grid grid-cols-4 bg-orange-300 w-[60vw] h-[50vh] mx-auto rounded-3xl'>
//       <div className=" container mx-auto">
//         <div className="grid grid-cols-4 container">
//           {products?.map((product, idx) => (
//               <Link href={`products/${product._id}`} passHref>
//                 <div key={idx} className="group hover:bg-orange-200">
//                   <div className="aspect-[9/12]  group ">
//                     <Image
//                       src={product.img || "/images/Baraa.png"}
//                       alt="productsPhoto"
//                       width={300}
//                       height={300}
//                       className="w-full h-full object-cover rounded"
//                     />
//                   <div className=" text-2xl p-5 ">{product.title}</div>
//                    <div>{product.price}</div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Shop
// export async function getStaticProps(ctx: any) {
//   const { data} = await axios.get(
//     `http://localhost:8000/product`)

//   console.log("DATA",data);
//   return { props: { products: data} };
// }

const Shop = () => {
  return (
    <div>
      
    </div>
  )
}

export default Shop