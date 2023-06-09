"use client";

import React, { useMemo, useState } from "react";

// import Pagination from "./Pagination";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  // More products...
];

export default function CardList() {
  const [pagination, setPagination] = useState<any>({
    currentPage: 1,
    itemsPerPage: 3,
  });
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pagination.itemsPerPage);
  const handlePageChange = (page: number) => {
    setPagination((prevPagination: any) => ({
      ...prevPagination,
      currentPage: page,
    }));
  };
  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const endIndex = startIndex + pagination.itemsPerPage;

  const displayedData = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [startIndex, endIndex]);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <h2 className="sr-only text-black">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 ">
        {displayedData?.map((product) => (
          <a
            key={product.id}
            href={product.href}
            className="group bg-white rounded-3xl"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                width={400}
                height={400}
                src={product.imageSrc}
                alt={product.imageAlt}
              />
            </div>
            <div className="px-7 pb-5">
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
