"use client"
import { creatorNavbarItems } from "@/data";
import Link from "next/link";
import React, { memo, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/context";

const CreatorNavBar = () => {
  const [activeNavLink, setactiveNavLink] = useState("mypage")
  const {user,setUser} = useContext(UserContext);
  useEffect(() => {
  console.log(activeNavLink)
  }, [activeNavLink])
  return (
    <nav className="flex flex-col p-5 items-start justify-between min-h-screen bg-white z-[100]">
      <section className="w-full">
        <div className="text-2xl font-poppins font-semibold mb-10 p-[10px]">
          Creators <span className="text-gradient">Earn</span>
        </div>
        <ul className="flex flex-col gap-5">
          {creatorNavbarItems.map(({ name, icon }, id) => {
            const normalizedName = name.replace(" ", "").toLowerCase();
            return (
              <div key={id} onClick={()=>setactiveNavLink(normalizedName)} className="w-full">
                <Link href={id===0 ? "/creator/venkatsai":`/creator/${normalizedName}`}>
                  <li className={`nav-item-creator flex ${normalizedName===activeNavLink?"active":""}`}>
                    <div>
                      <img src={`/${icon}`} width={20} />
                    </div>
                    <p className="capitalize">{name}</p>
                  </li>
                </Link>
              </div>
            );
          })}
          <Link href={"/creator/create"} className="w-full">
            <button className="w-full border-[1px] rounded-lg border-solid border-gray-400 flex items-center justify-center leading-tight font-poppins font-[500] text-sm px-5 py-3 gap-2 hover:bg-[whitesmoke]">
              <img src="/create.svg" alt="create.svg" width={20}/>
              <h3 className="">Create</h3>
            </button>
          </Link>
        </ul>
      </section>
      <div className="flex">
        <div className="px-3 py-1 rounded-md bg-blue-500 font-semibold font-poppins flex text-xl items-center justify-center w-max text-white">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col px-3 items-start justify-center">
          <h3 className="text-xs font-poppins font-[600] text-gray-700">{user.name}</h3>
          <p className="text-slate-500 text-xs">Creator</p>
        </div>
      </div>
    </nav>
  );
};

export default memo(CreatorNavBar);
