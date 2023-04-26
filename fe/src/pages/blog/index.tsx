import Image from "next/image";
import { Inter } from "next/font/google";
// import Advice from "./components";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const dog1 = require("../../assets/images/dogbone.png");
const dog2 = require("../../assets/images/hachig.png");
const dog3 = require("../../assets/images/german.png");
const dog4 = require("../../assets/images/drink.png");

const lists = [
  {
    title: "Нохой мууранд ямар төрлийн яс өгөх нь буруу вэ?",
    data: "2023-04-17 01:54",
    img: dog1,
  },
  { title: "Хачиг /хувалз/", data: "2023-04-18 01:54", img: dog2 },
  { title: "Гөлөгний нийгэмших явц", data: "2023-04-19 01:54", img: dog3 },
  {
    title: "Ус бол нохойн хоол хүнсэн дэх хамгийн чухал элемэнт мөн",
    data: "2023-04-20 01:54",
    img: dog4,
  },
];

export default function Blog() {
  return (
    <div className="w-full h-fit bg-[#FFF3D3] flex justify-center items-center p-14">
      <div className="bg-white w-3/5 h-fit p-20 rounded-2xl">
        {lists.map((list, idx) => (
          <div key={idx} className="grid grid-cols-2 mb-10 w-[80%] mx-auto">
            <Image width={400} height={200} src={list.img} alt="doggo" />
            <div className=" flex flex-col justify-evenly ">
              <p className="text-[#9999] mb-11">{list.data}</p>
              <div className=" w-full h-3/4">
                <h1 className="text-black text-2xl font-bold mb-10">
                  {list.title}
                </h1>
                <Link
                  href="#"
                  className="bg-orange-500 rounded-xl pr-8 pl-8 py-2 w-[30%]"
                >
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
