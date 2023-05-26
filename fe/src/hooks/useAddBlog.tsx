import React, { useState, useEffect } from "react";
import axios from "axios";

import { IBlog } from "@/utils/interfaces";

export const useAddBlogs = () => {
  const [newBlog, setNewBlog] = useState<IBlog>({
    title: "",
    imgList: [],
    description: "",
    publishedBy: "",
  });

  const createBlog = async (blog: any, clearFields: () => void) => {
    try {
      const result = await axios.post(
        "https://lucky-paws-g5kgwvgpn-luckypaws.vercel.app/blog",
        blog
      );
      setNewBlog({ title: "", imgList: [], description: "", publishedBy: "" });
      clearFields();
    } catch (err) {
      console.log("ERR", err, blog);
    }
  };

  return { newBlog, createBlog, setNewBlog };
};
