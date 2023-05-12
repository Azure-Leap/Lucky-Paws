import React from "react";
import CardList from "../../components/Petlist/cardList";
import Pagination from "../../components/Petlist/pagination";
import SortList from "../../components/Petlist/SortList";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAnimals } from "@/hooks/usePets";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Image from "next/image";

const Section = () => {
  const [animals] = useAnimals();
  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  const breadCrumbs = [{ name: "Pets", link: "" }];
  return (
    <div className="bg-[#FFF3D3] p-10">
    <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="m-auto container grid grid-cols-6">
        <div className="lg:col-span-1 bg-white  md:aspect-[9/12] rounded-lg m-5 sm:col-span-5 max-sm:col-span-6 shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
        <SortList/>
        </div>
        <div className="gap-6 mx-auto md:col-span-5 sm:col-span-5 max-sm:col-span-6 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {animals?.map((animal: any, idx: number) => (
            <Link key={idx} href={`animals/${animal._id}`} passHref>
              <div className="group bg-white hover:scale-110  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-3xl m-3">
                <div className="group grid grid-cols-2">
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 ">
                    <img
                      src={animal.imgs[0].src}
                      alt="animalsPhoto"
                      width={400}
                      height={100}
                      className="h-[400px] w-full rounded-t-3xl object-fill "
                    />
               <div></div>
                  </div>
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 text-center  my-auto">
                    <div className=" max-sm:text-xl sm:text-xl md:text-lg p-1 font-bold">
                      {animal.name}
                    </div>
                    <div className="p-1 font-medium">{animal.gender}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default Section;
