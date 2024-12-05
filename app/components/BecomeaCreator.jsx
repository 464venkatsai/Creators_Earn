"use client"
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

const BecomeaCreator = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [creator, setCreator] = useState({email:"",password:""});
  
  const handleChange = (e)=>{
    setCreator({...creator,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
  }

  return (
    <div className="p-[5rem] bg-gradient-to-r from-cyan-300 to-pink-300" id="become a creator">
      <div className="flex w-full bg-white rounded-[2rem] shadow-lg">
        <div className="w-[60%] p-[5rem]">
            <h1 className="text-gradient text-5xl font-poppins font-semibold my-10">Become a Creator Now</h1>
          <form className="flex flex-col gap-8" onSubmit={(e)=>handleSubmit(e)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="Email" className="font-semibold font-poppins">Email :</label>
                <input type="text" name="email"  className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[25vw] text-lg font-nunito" value={creator.username} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="Password" className="font-semibold font-poppins">Password :</label>
                <input type="password" name="password" className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[25vw] font-nunito" value={creator.password} onChange={(e)=>handleChange(e)} />
            </div>
            <button type="submit" className="text-white font-poppins font-semibold gradient px-10 py-4 w-[25vw] tracking-wider rounded-lg">login</button>
          </form>
          <div className="ball-gradient h-[2px] w-[25vw] my-10"></div>
          <div className="" onClick={()=>signIn()} >
            <div className="flex bg-slate-700 w-[25vw] px-10 py-4 gap-5 justify-center rounded-lg hover:bg-slate-600 cursor-pointer">
                <div>
                    <img src="git.svg" alt="" width={25}/>
                </div>
                <p className="text-white">Continue with github</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl bg-gradient-to-r w-[40%] from-cyan-300 to-blue-300 items-end pb-[5rem] flex">
          <img src="designer.png" alt="" width={444} className="ml-[-13rem]" />
          <img src="plant.png" alt="" width={125} />
        </div>
      </div>
    </div>
  );
};

export default BecomeaCreator;
