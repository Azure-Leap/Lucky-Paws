import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Fredoka } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import Link from "next/link";

import axios from "axios";

const fredoka = Fredoka({ subsets: ["latin"] });

const SigninForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("error");
  const [isSignIn, setisSignIn] = useState(false);

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
  const handleClose = () => setOpen(false);

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`http://localhost:8008/user/signin`, {
        email,
        password,
      });
      const data = await result.data;
      console.log("SUCCESS", await data.data);
      localStorage.setItem("user", JSON.stringify(data.data));

      if (String(data.status) === "ok") {
        success();
        setUser(data.data.user);
      } else {
        console.log(data);
      }
      setTimeout(() => {
        router.push("/home");
        handleClose();
      }, 3000);
      handleClose();
    } catch (error: any) {
      console.log(error);
      setStatus("error");
      errorAlert();
      // alert(error.response.data.error);
    }
  };
  const handleClick = async () => {
    if (email === "" || password === "") {
      // alert("Хэрэглэгчийн мэдээлэл хоосон байна.");
      warningAlert();
      console.log("Хэрэглэгчийн мэдээлэл хоосон байнаа.");

      return;
    }

    login(email, password);
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center ">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8 ">
              <h1
                className={`${fredoka.className} text-5xl font-bold text-orange-500 mb-7`}
              >
                Welcome back!
              </h1>
              <div className="flex justify-evenly items-center w-full mb-7 p-5">
                <FontAwesomeIcon className="icon w-[15%]" icon={faFacebook} />
                <FontAwesomeIcon className="icon w-[15%]" icon={faGoogle} />
              </div>

              <p className={`${fredoka.className} text-center text-gray-500`}>
                or use your email and password:
              </p>

              <div className="mt-12">
                <div className="relative">
                  <input
                    id="signin-email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2  border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="john@doe.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className={`${fredoka.className} absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                  >
                    Email
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="signin-password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className={`${fredoka.className} absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                  >
                    Password
                  </label>
                </div>

                <input
                  type="submit"
                  value="Sign in"
                  onClick={handleClick}
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-orange-500 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </div>
              <a
                href="#"
                className={`${fredoka.className} mt-4 block text-sm text-center font-medium text-orange-500 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SigninForm;
