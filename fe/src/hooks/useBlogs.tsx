import React, { useState, useEffect } from "react";
import axios from "axios";

import { Iblog } from "@/utils/interfaces";

export const useBlogs = () => {
  const [blogs, setBlog] = useState<Iblog[]>([]);

  const getAllBlogs = async () => {
    try {
      const result = await axios.get(
        "https://lucky-paws-api.onrender.com/blog"
      );
      setBlog(result.data.blog);
      console.log(result);
    } catch (err) {
      console.log("ERR", err);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return [blogs];
};