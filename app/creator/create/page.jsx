"use client"
import { createBlog } from "@/actions/useractions";
import Textarea from "@/app/components/Textarea";
import { AlertContext, UserContext } from "@/app/context/context";
import React, { useContext, useState } from "react";

const Create = () => {
  const {Alert,setAlert} = useContext(AlertContext);
  const [blog, setBlog] = useState({title:"",description:""})
  const {user,setUser} = useContext(UserContext);

  const publish = async () => {
    try {
      await createBlog(blog.title,blog.description,user.name,user.name);
      setAlert({ message: "Saved Blog Successfully", time: 3000 });
      console.log("Successfully Saved Blog");
    } catch (error) {
      setAlert({message: "Failed to save blog", className: "bg-red-500", time: 3000 });
      console.error("Error saving blog:", error);
    }
  };
  

  return (
    <div className="w-full min-h-screen bg-[whitesmoke]">
      <div className="sticky top-0">
        <div className="flex justify-between px-10 py-4 items-center shadow-bottom mb-[1px] bg-white">
          <h3 className="text-gray-500 text-xl font-poppins font-semibold">
            Create Blog
          </h3>
          <div className="text-gray-500 text-lg font-poppins font-[500]">
            <label htmlFor="Blog-Title">Blog Title - </label>
            <input
              type="text"
              value={blog.title}
              name="title"
              onChange={(e)=>setBlog({...blog,[e.target.name]:e.target.value})}
              className=" outline-none text-black placeholder-black bg-[white] font-semibold"
              placeholder="Untitled"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 rounded-lg text-white flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm font-poppins" onClick={()=>publish()}>
            <img src="/publish.svg" alt="" width={20} className="invert" />
            <p>Publish</p>
          </button>
        </div>
        <div className="flex justify-between items-center py-4 px-10 shadow-bottom bg-white">
          <div className="flex justify-between items-center gap-5">
            {["text.svg", "italic.svg", "underline.svg"].map((icon, id) => {
              return (
                <button key={id} className="hover:bg-[#c2c2c2] rounded-sm px-2 py-2">
                  <img
                    src={`/${icon}`}
                    id={id}
                    alt={icon}
                    width={id === 1 ? 17 : 25}
                    className=""
                  />
                </button>
              );
            })}
          </div>
          <button className="bg-[#cfcfcf] hover:bg-[#c2c2c2] rounded-lg  flex items-center justify-center gap-1 px-5 py-3 font-semibold text-sm font-poppins">
            <img src="/preview.svg" alt="" width={20} />
            <p>Preview</p>
          </button>
        </div>
      </div>
      <div className="px-[5rem] py-10">
        <Textarea blog={blog} setBlog={setBlog}/>
      </div>
    </div>
  );
};

export default Create;
