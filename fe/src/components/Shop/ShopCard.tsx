// import Image from 'next/image';
// import React from 'react'


// interface IProduct {
// id:Number;
// title:String;
// price:Number;
// img:String;
// detail:String;
// quantity:Number;
// }
// interface IProducts {
//   products: IProduct[];
// }

// export default function  ShopCard ({products}:IProducts){
//   return (
//     <div>
//     <Image
//     src={products.img || ""}
//     />
//     </div>
//   )
// }
// export async function getServerSideProps(ctx: any) {
//   const result = await fetch(
//     `http://localhost:8000/products`)
//   const data = await result.json();
//   console.log(data);
//   return { props: { products: data.products} };
// }
