import Image from "next/image";
import { Inter } from "next/font/google";
import { useBlogs } from "@/hooks/useBlogs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  const [blogs] = useBlogs();
  return (
    <div className="w-full h-fit bg-[#FFF3D3] flex justify-center items-center p-14">
      <div className="bg-white w-3/5 h-fit p-20 rounded-2xl">
        {blogs.map((blog:any, idx:number) => (
          <div key={idx} className="grid grid-cols-2  mx-auto mb-16 border-b-2 pb-10 border-gray-600">
            <div >
              <Image
              src={blog.img}
              alt="productsPhoto"
              width={500}
              height={300}
              className="h-full w-full rounded-lg object-fill col-span-1 "
                    />

            </div>
            <div className=" col-span-1 mx-5 ">
              <div className=" ">
                <h1 className="text-black text-2xl font-bold mb-10">
                  {blog.title}
                </h1>
                <Link
                   key={idx} href={`blog/${blog._id}`} passHref
                  className="bg-orange-400 rounded-xl pr-8 pl-8 py-2 w-[30%]"
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
