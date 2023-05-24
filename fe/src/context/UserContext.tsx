"use client";

import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import { log } from "console";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");

  const success = () => {
    return toast.success("🦄 Wow Success!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const errorAlert = () => {
    return toast.error("🦄 Oops!!! ERROR!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const warningAlert = () => {
    return toast.warn("Хэрэглэгчийн мэдээлэл хоосон байна.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const Resuccess = () => {
    return toast.success("🦄 Wow Success! Now CLICK SIGNIN!!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const ReerrorAlert = () => {
    return toast.error("infomartion wrong!!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const RewarningAlert = () => {
    return toast.warn("Нууц үг хоорондоо таарахгүй байна. !!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`http://localhost:8000/user/signin`, {
        email,
        password,
      });
      const data = await result.data;
      const token = await data.token;
      const name = await data.user.name;

      console.log("SUCCESS", await data.user);
      console.log("TOKEN", await token);
      console.log("name", await name);

      localStorage.setItem("user", String(data.user));

      localStorage.setItem("name", String(data.user.name));

      localStorage.setItem("profile", String(data.user.profileImg));

      
      // console.log(localStorage.getItem("user"));

      localStorage.setItem("token", String(data.token));

      // console.log(localStorage.getItem("token"));

      if (String(data.status) === "ok") {
        success();
        setState("success");
        setUser(data.user);
        console.log(data.user);
        // alert("success");
        localStorage.setItem("user", String(data.user.email));
        localStorage.setItem("token", String(data.token));
        localStorage.setItem("name", String(data.user.name));
        localStorage.setItem("profile", String(data.user.profileImg));

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else if (token == undefined) {
        localStorage.removeItem("token");
      }
    } catch (error: any) {
      console.log(error);
      setState("error");

      errorAlert();
      // alert("Hello error");
    }
  };
  const handleLogin = async () => {
    if (email === "" || password === "") {
      // alert("Хэрэглэгчийн мэдээлэл хоосон байна.");

      warningAlert();
      setState("warning");

      console.log("Хэрэглэгчийн мэдээлэл хоосон байнаа.");
    }

    login(email, password);
  };
  <ToastContainer />;
  const signup = async (name: string, email: string, password: string) => {
    try {
      const res = await axios.post("http://localhost:8000/user/signup", {
        name,
        email,
        password,
      });
      console.log("res", res);

      // alert(res.data.message);
      Resuccess();
      setTimeout(() => {
        router.push("/auth");
      }, 5000);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleRegister = async () => {
    if (!email || !name || !password) {
      ReerrorAlert();
      // setIsAlert(true);
      console.log("Medeelel aldaatai baina");

      return;
    }
    // if (password !== rePassword) {
    //   RewarningAlert();

    //   console.log("Нууц үг хоорондоо таарахгүй байна. !!!");

    //   return;
    // }
    signup(name, email, password);
  };
  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        name,
        setName,
        rePassword,
        setRePassword,
        handleRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
