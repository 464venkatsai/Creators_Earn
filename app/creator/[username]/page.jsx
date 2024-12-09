"use client"
import { UserContext } from "@/app/context/context";
import Link from "next/link";
import React, { memo, useContext, useEffect } from "react";

const User = ({ params }) => {
  const username = React.use(params).username;
  const {user,setUser} = useContext(UserContext);
  useEffect(() => {
    setUser((prevUser)=>({...prevUser,name:username}))
  }, [username,setUser])
  return (
    <div className="w-full overflow-y-scroll scrollable-none">
      <div className="min-h-[40vh] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 relative">
        <div className="bg-blue-500 py-7 px-10 font-poppins font-bold w-max text-white absolute -bottom-[4.6rem] z-20 left-[46%] rounded-lg text-7xl">
          {username.charAt(0).toUpperCase()}
        </div>
      </div>
      <div className="flex justify-end gap-10 px-10 my-5">
        <Link href={"/creator/create"} className="">
          <button className="flex bg-white  px-5 py-3 gap-1 rounded-lg items-center justify-center leading-tight text-sm font-poppins font-semibold shadow-outer">
            <img src="/create.svg" className="" alt="create.svg" width={25} />
            <p>Create</p>
          </button>
        </Link>
        <button className="bg-white p-3 rounded-lg shadow-outer">
          <img src="/share.svg" alt="" className="invert-[.25]" width={25} />
        </button>
      </div>
      <div className="my-5 flex items-center justify-center">
        <section className="bg-white p-10 rounded-lg w-[40vw]">
          <form className="flex flex-col gap-10">
            {["Name","Email","Password","Tag Line","Profile Image","Cover Image"].map((input,id)=>{
              return(
              <div key={id} className="flex justify-between items-center text-sm font-poppins font-[500] text-[#353535]">
                <label htmlFor={input}>{input} :</label>
                <input type="text" name={input.toLowerCase()} className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[20vw]"/>
              </div>)
            })}
            <button type="submit" className="py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default memo(User);
