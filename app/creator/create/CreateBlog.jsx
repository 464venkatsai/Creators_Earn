"use client";

import { createBlog, getBlogPost } from "@/actions/useractions";
import { AlertContext, UserContext } from "@/app/context/context";
import { modules } from "@/data";
import { useSearchParams } from "next/navigation";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import ShortUniqueId from "short-unique-id";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to disable SSR
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const CreateBlogPage = () => {
  const { Alert, setAlert } = useContext(AlertContext);
  const { user } = useContext(UserContext);
  const [blog, setBlog] = useState({ title: "", description: "", blogContent: "" });
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const quillRef = useRef(null);
  const {randomUUID} = new ShortUniqueId({ length: 6 });

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const blogPost = await getBlogPost(id);
          setBlog(blogPost);
        } catch (error) {
          console.error("Error fetching blog post:", error);
        }
      } else {
        console.log("ID not found");
      }
    };

    fetchPost();
  }, [id]);

  const publish = async () => {
    try {
      let likes = 0;
      let views = 0;

      if (id) {
        const blogPost = await getBlogPost(id);
        if (blogPost) {
          views = blogPost.views + 1;
          likes = blogPost.likes;
        }
      }

      await createBlog(
        id || "BID" + randomUUID(),
        user.id,
        blog.title,
        blog.description,
        blog.blogContent,
        user.name,
        likes,
        views
      );

      setAlert({ message: "Saved Blog Successfully", time: 3000 });
      console.log("Successfully Saved Blog");
    } catch (error) {
      setAlert({ message: "Failed to save blog", className: "bg-red-500", time: 3000 });
      console.error("Error saving blog:", error);
    }
  };

  const handleChange = (value) => {
    setBlog({ ...blog, blogContent: value });
  };

  return (
    <div className="w-full min-h-screen bg-[whitesmoke]">
      <div className="sticky top-0 z-[1000]">
        <div className="flex justify-between px-10 py-4 items-center shadow-bottom mb-[1px] bg-white">
          <h3 className="text-gray-500 text-xl font-poppins font-semibold">Create Blog</h3>
          <div className="text-gray-500 text-lg font-poppins font-[500]">
            <label htmlFor="Blog-Title">Blog Title - </label>
            <input
              type="text"
              value={blog.title}
              name="title"
              onChange={(e) => setBlog({ ...blog, [e.target.name]: e.target.value })}
              className="outline-none text-black placeholder-black bg-[white] font-semibold"
              placeholder="Untitled"
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-500 rounded-lg text-white flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm font-poppins"
            onClick={publish}
          >
            <img src="/publish.svg" alt="" width={20} className="invert" />
            <p>Publish</p>
          </button>
        </div>
        <div className="px-10 py-4 bg-[white] shadow-bottom">
          <div className="flex justify-between">
            <label htmlFor="Blog-Description" className="text-gray-500 text-base font-poppins font-[500]">
              Blog Description:
            </label>
            <button className="bg-[#e0e0e0] hover:bg-[#c9c9c9] rounded-lg flex items-center justify-center gap-1 px-5 py-3 font-semibold text-sm font-poppins">
              <img src="/preview.svg" alt="" width={20} />
              <p>Preview</p>
            </button>
          </div>
          <textarea
            type="text"
            value={blog.description}
            name="description"
            onChange={(e) => setBlog({ ...blog, [e.target.name]: e.target.value })}
            className="bg-[whitesmoke] shadow-inside outline-none px-3 py-2 rounded-md w-full my-5"
            placeholder="Write a Short Note Of Your Content In Atleast 1000 Character"
            minLength={700}
          />
        </div>
      </div>

      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={blog.blogContent}
        onChange={handleChange}
        placeholder="Your Supports Are Waiting For Your Content."
        modules={modules}
        className="bg-white flex flex-col shadow-lg min-h-screen font-poppins quill-editor mt-4"
      />
    </div>
  );
};

export default memo(CreateBlogPage);
