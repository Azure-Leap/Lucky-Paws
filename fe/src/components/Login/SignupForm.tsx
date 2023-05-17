import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Fredoka } from "next/font/google";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const fredoka = Fredoka({ subsets: ["latin"] });

const SignupForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [open, setOpen] = useState(false);

  const [state, setState] = useState("");

  const success = () => {
    return toast.success("🦄 Wow Success! Sign in deer darj nevterne uu", {
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

  const warningAlert = () => {
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
  const handleClose = () => setOpen(false);

  const handleClick = async () => {
    if (!email || !name || !password) {
      errorAlert();
      // setIsAlert(true);
      console.log("Medeelel aldaatai baina");

      return;
    }
    // if (password !== rePassword) {
    //   warningAlert();

    //   console.log("Нууц үг хоорондоо таарахгүй байна. !!!");

    //   return;
    // }
    signup(name, email, password);
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const res = await axios.post("http://localhost:8008/user/signup", {
        name,
        email,
        password,
      });
      console.log("res", res);
      setState("success");
      // alert(res.data.message);
      success();
      setTimeout(() => {
        router.push("/auth");
        handleClose();
      }, 5000);
      handleClose();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1
                className={`text-5xl font-bold text-orange-500 mb-10 ${fredoka.className}`}
              >
                Create account
              </h1>
              <div className="flex justify-evenly items-center w-full mb-7 p-5">
                <FontAwesomeIcon className="icon w-[15%]" icon={faFacebook} />
                <FontAwesomeIcon className="icon w-[15%]" icon={faGoogle} />
              </div>

              <div className="mt-12">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-orange-600"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className={`${fredoka.className} absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                  >
                    Name
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-orange-600"
                    placeholder="john@doe.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className={`${fredoka.className} absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-orange-600"
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

                <button
                  onClick={handleClick}
                  className={` ${fredoka.className} mt-20 px-8 py-4 uppercase rounded-full bg-orange-500 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer`}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
