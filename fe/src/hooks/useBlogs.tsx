import React, { useState, useEffect } from "react";
import axios from "axios";

import { IBlog } from "@/utils/interfaces";

export const useBlogs = () => {
  const [blogs, setBlog] = useState<IBlog[]>([]);

  const getAllBlogs = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/blog"
      );
      setBlog(result.data.blog);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  // console.log(blogs)

  useEffect(() => {
    getAllBlogs();
  }, []);

  return {blogs};
};