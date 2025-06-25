"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";


export default function AuthPage() {
  const { data: session } = useSession();
const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");
  const error = errorParam ? errorParam.toLowerCase() : null;


const errorMessages = {
  callback: "There was an error during the authentication process. Please try again.",
  oauthcallback: "There was an OAuth callback error. Please try again.",
  access_denied: "You denied the login request. Please try again.",
  verification: "Verification failed. Try again.",
  default: "An unexpected error occurred. Please try again.",
};

const errorMessage = error ? errorMessages[error] || errorMessages.default : null;




 if (session) {
  return (
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">

   
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
     
       <Image
  src={session.user.image}
  width={80}
  height={80}
  alt="Profile"
  className="rounded-full mx-auto mb-4"
/>

        <h2 className="text-xl font-semibold mb-2">Welcome, {session.user.name}</h2>
        <p className="text-gray-600 mb-4">{session.user.email}</p>
        <button
          onClick={() => signOut()}
          className="px-6 py-2 rounded bg-red-500 hover:bg-red-600 text-white transition-all duration-300 cursor-pointer"
        >
          Sign Out
        </button>
      </div>

    </div>
    
  );
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-600 to-black text-white">
      <Image
        src="/next-js-seeklogo.png"
   
        height={300}
        width={300}
        alt="Logo"
        className="mb-6 rounded-full text-white"
      />
 {errorMessage && (
      <p className="text-red-500 mb-4 bg-red-200 px-4 py-2 ">{errorMessage}</p>
 )}

      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-lg shadow-2xl text-center space-y-6 w-80">
        <h1 className="text-2xl font-bold text-black">Sign in to continue</h1>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}

          className="w-full py-2 px-4 bg-yellow-600 text-black rounded-lg hover:bg-amber-300 hover:text-gray-800 flex items-center justify-center space-x-2 transition cursor-pointer"
        >
         <FaGoogle/>
          <span>Sign in with Google</span>
        </button>

        <button
          onClick={() => signIn("github",{ callbackUrl: "/" })}
          className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center justify-center space-x-2 transition cursor-pointer"
        >
          <FaGithub />
          <span>Sign in with GitHub</span>
        </button>

        <button
          onClick={() => signIn("facebook")}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 transition cursor-pointer"
        >
          <FaFacebook />
          <span>Sign in with Facebook</span>
        </button>
      </div>
    </div>
  );
}
