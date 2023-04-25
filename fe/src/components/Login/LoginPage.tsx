import { useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import LeftOverlayContent from "./LeftOverlayContent";
import RightOverlayContent from "./RightOverlayContent";

export default function LoginPage() {
  const [isAnimated, setIsAnimated] = useState(false);
  //   const overlayBg =
  //     "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800";
  // const catImage = require("../../assets/images/cat.png");
  // const dogImage = require("../../assets/images/golden.png");
  return (
    <div className="grid grid-cols-1 ">
      <div className="h-screen w-full bg-white relative overflow-hidden rounded-lg">
        <div
          id="signin"
          className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
            isAnimated ? "translate-x-full opacity-0" : ""
          }`}
        >
          <SigninForm />
        </div>

        <div
          id="signup"
          className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
            isAnimated
              ? "translate-x-full opacity-100 z-50 animate-show"
              : "opacity-0 z-10"
          }`}
        >
          <div className="h-full w-full flex justify-center items-center">
            <SignupForm />
          </div>
        </div>

        <div
          id="overlay-container"
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transition-transform duration-700 ease-in-out z-100 ${
            isAnimated ? "-translate-x-full" : ""
          }`}
        >
          <div
            id="overlay"
            className={`bg-hero-image relative -left-full h-full w-[200%] transform transition transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            <div
              id="overlay-left"
              className={`bg-[url('../assets/images/cat.png')] w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%] transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-0" : "-translate-x-[20%]"
              }`}
            >
              <LeftOverlayContent
                isAnimated={isAnimated}
                setIsAnimated={setIsAnimated}
              />
            </div>
            <div
              id="overlay-right"
              className={`bg-[url('../assets/images/golden.png')] bg- h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <RightOverlayContent
                isAnimated={isAnimated}
                setIsAnimated={setIsAnimated}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default LoginPage;
