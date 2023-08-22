"use client";
import Image from "next/image";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="min-h-[90vh] flex items-center justify-center">
        <h1 className="font-bold text-[32px]">Loading please wait</h1>
      </div>
    );
  }
  if (status === "authenticated") {
    router.push("/");
  }

  if (status === "unauthenticated") {
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
              className="cursor-pointer object-cover"
              onClick={() => signIn("google")}
            />
            <Image
              src={"/lf.jpeg"}
              alt="login"
              width={200}
              height={100}
              className="cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
