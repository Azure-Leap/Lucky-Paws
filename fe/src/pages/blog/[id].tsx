import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default function Blog({ blog }: any) {
  const router = useRouter();

  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  const breadCrumbs = [
    { name: "Blog", link: "/blog" },
    { name: blog.title, link: "" },
  ];
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className=" container bg-white mx-auto my-12 rounded-xl ">
        <div>
          <Image
            src={blog.img}
            alt="blosPhoto"
            width={1000}
            height={400}
            className=" object-contain rounded-3xl mx-auto my-10 p-8 "
          />
        </div>
        <div className="m-5">
          <div>{blog.date}</div>
          <h1 className="max-sm:text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold ">
            {blog.title}
          </h1>
          <div className="text-xl max-sm:overflow-y-scroll sm:overflow-y-scroll  xl:overflow-y-scroll max-sm:max-h-52 sm:max-h-72 md:max-h-96 xl:max-h-[500px] mt-4">
            {blog.description}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://lucky-paws-chi.vercel.app/blog");
  const blogs = await res.json();
  const ids = blogs?.blog?.map((blog: any) => blog._id);
  const paths = ids.map((id: String) => ({ params: { id: id.toString() } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://lucky-paws-chi.vercel.app/blog/${params.id}`
  );
  const data = await res.json();
  console.log("data:", data);

  return { props: { blog: data.blog } };
}
