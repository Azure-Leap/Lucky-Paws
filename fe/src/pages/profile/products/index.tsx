import { useProducts } from "../../../hooks/useProducts";
import React from "react";
import LayoutWithSidebar from "../profileLayout";

export default function Products() {
  const { products } = useProducts();
  return (
    <div className=" overflow-x-auto container grid bg-blue-300 mx-auto">
      <div className="bg-red-300 justify-self-end">
        <button className="bg-orange-500 justify-self-end rounded-xl py-2 px-3 text-white">
          + Add New
        </button>
      </div>
      <table className="w-3/4 mx-auto text-sm text-left shadow-md text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: any, idx: number) => (
            <tr key={idx} className="bg-white border-b  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {product.title}
              </th>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="mx-2 font-medium text-blue-600  hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="mx-2 font-medium text-red-600  hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Products.getLayout = function (page: any) {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>;
};
