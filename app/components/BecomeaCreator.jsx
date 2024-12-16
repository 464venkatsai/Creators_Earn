"use client";
import { createUser, loginUser } from "@/actions/useractions";
import React, { memo, useContext, useState } from "react";
import { AlertContext, UserContext } from "../context/context";
import { useRouter } from "next/navigation";
import User from "@/models/User.js";

const BecomeaCreator = () => {
  const [creator, setCreator] = useState({ email: "", password: "" });
  const {user,setUser} = useContext(UserContext);
  const {Alert,setAlert} = useContext(AlertContext);
  const router = useRouter()
  const [newUser, setnewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userType, setuserType] = useState("existing");

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userType === "existing") {
      console.log("Login:", creator);
      try {
        const existingUser = await loginUser(creator.email);
        console.log(existingUser)
        if (existingUser) {
          setUser({username:existingUser.username,name:existingUser.name,email:existingUser.email})
        }else{
          setAlert({message: "UserName Doesn't Exists", className: "bg-red-500", time: 3000 });
        }
      } catch (error) {
        setAlert({message: "UserName Doesn't Exists"+error, className: "bg-red-500", time: 3000 });
        console.log(error)
      }
    } else {
      console.log("Sign Up:", newUser);
      await createUser(newUser.username,newUser.email,newUser.password);
      router.push(`/creator/${newUser.username}`)
      setUser({email:newUser.email,username:newUser.username,name:newUser.username})
    }
    if(user.userId){
      router.push(`/creator/${user.userId}`)
    }
  };

  return (
    <div
      className="p-[5rem] bg-gradient-to-r from-cyan-300 to-pink-300"
      id="become a creator"
    >
      <div className="flex w-full bg-white rounded-[2rem] shadow-lg">
        <div className="w-[60%] p-[5rem]">
          <h1 className="text-gradient text-5xl font-poppins font-semibold my-10">
            Become a Creator Now
          </h1>
          {userType === "existing" ? (
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold font-poppins">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[25vw] text-lg font-nunito"
                  value={creator.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-semibold font-poppins"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[25vw] font-nunito"
                  value={creator.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="text-white font-poppins font-semibold gradient px-10 py-4 w-[25vw] tracking-wider rounded-lg"
              >
                Login
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="font-semibold font-poppins">
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[25vw] text-lg font-nunito"
                  value={newUser.username}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold font-poppins">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[25vw] text-lg font-nunito"
                  value={newUser.email}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-semibold font-poppins"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-[25vw] font-nunito"
                  value={newUser.password}
                  onChange={handleSignupChange}
                />
              </div>
              <button
                type="submit"
                className="text-white font-poppins font-semibold gradient px-10 py-4 w-[25vw] tracking-wider rounded-lg"
              >
                Sign Up
              </button>
            </form>
          )}
          <div className="ball-gradient h-[2px] w-[25vw] my-10"></div>
          {userType === "existing" ? (
            <span className="text-slate-500 flex gap-3 items-center">
              Don&apos;t have an account?{" "}
              <button
                className="text-gradient font-poppins font-[550]"
                onClick={() => setuserType("new")}
              >
                Create Now
              </button>
            </span>
          ) : (
            <span className="text-slate-500 flex gap-3 items-center">
              Already have a Creator Account?{" "}
              <button
                className="text-gradient font-poppins font-[550]"
                onClick={() => setuserType("existing")}
              >
                Login Now
              </button>
            </span>
          )}
        </div>
        <div className="relative rounded-3xl bg-gradient-to-r w-[40%] from-cyan-300 to-blue-300 items-end pb-[5rem] flex">
          <img src="designer.png" alt="" width={444} className="ml-[-13rem]" />
          <img src="plant.png" alt="" width={125} />
        </div>
      </div>
    </div>
  );
};

export default memo(BecomeaCreator);
