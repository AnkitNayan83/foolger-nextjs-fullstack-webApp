import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="h-[95vh] flex items-center  text-red-500">
      <div className="flex-1 h-[40vh] md:h-full mb-20 md:mb-0 relative hidden md:block">
        <Image src={"/s1.jpeg"} alt="" fill={true} className="object-cover" />
      </div>
      <div className="flex-1">
        <h1 className="text-[32px] font-bold text-center mb-10">
          Login/SignUp
        </h1>
        <div className="flex items-center justify-center gap-6">
          <Image
            src={"/lg.png"}
            alt="login"
            width={200}
            height={100}
            objectFit="cover"
            className="cursor-pointer"
          />
          <Image
            src={"/lf.jpeg"}
            alt="login"
            width={200}
            height={100}
            className="cursor-pointer"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
