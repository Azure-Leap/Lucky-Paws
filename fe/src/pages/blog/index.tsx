import Image from "next/image";
import { Inter } from "next/font/google";
import { useBlogs } from "@/hooks/useBlogs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  const [blogs] = useBlogs();
  return (
    <div className=" bg-[#FFF3D3]  m-auto">
      <div className="bg-white container  mx-auto my-10 p-3  rounded-2xl shadow-[0_8px_16px_rgba(132,74,20,0.25)] ">
        {blogs.map((blog:any, idx:number) => (
          <div key={idx} className="grid grid-cols-2  mx-auto max-sm:p-2 m-8 pb-8  border-b-2  border-gray-200 ">
              <Image
              src={blog.img}
              alt="productsPhoto"
              width={500}
              height={300}
              className="rounded-lg object-fill col-span-1 mx-auto"
                    />
            <div className="col-span-1 mx-2">
                <h1 className="text-black lg:text-3xl font-bold sm:text-lg 2xl:text-4xl max-sm:text-sm ">
                  {blog.title}
                </h1>
                <h2 className="max-sm:line-clamp-2  sm:line-clamp-3 md:line-clamp-4 my-4 sm:text-sm  max-sm:text-xs 2xl:text-lg ">{blog.description}</h2>
                <Link 
                   key={idx} href={`blog/${blog._id}`} passHref
                  className="bg-orange-400 rounded-xl sm:p-2 max-sm:p-1 md:p-2 2xl:p-2 max-sm:text-xs "
                >
                  Read more...
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
