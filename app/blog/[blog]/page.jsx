"use client";
import { createBlog, getBlogPost } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const searchParams = useSearchParams();
  const [blog, setBlog] = useState({
    blogId: "",
    creatorName: "",
    title: "",
    description: "",
    blogContent: "",
    likes: 0,
    views: 0,
  });
  const handleUpdateBlog = async () => {
    setBlog({ ...blog, likes: blog.likes + 1 });
    await createBlog(
      blog.blogId,
      "A464Venkatsai",
      blog.title,
      blog.description,
      blog.blogContent,
      blog.creatorName,
      blog.likes+1,
      blog.views
    );
  };
  useEffect(() => {
    const id = searchParams.get("id");
    const fetchPost = async (id) => {
      const blog = await getBlogPost(id);
      console.log(blog);
      setBlog({
        blogId: blog.blogId,
        creatorName: blog.creatorName,
        title: blog.title,
        blogContent: blog.blogContent,
        likes: blog.likes,
        views: blog.views,
      });
      await createBlog(
        blog.blogId,
        "A464Venkatsai",
        blog.title,
        blog.description,
        blog.blogContent,
        blog.creatorName,
        blog.likes,
        blog.views+1
      );
    };
    if (id) {
      fetchPost(id);
    }
  }, []);
  return (
    <div className="px-16 w-full h-full font-poppins">
      <div className="bg-[whitesmoke] my-20 rounded-xl">
        <div className="font-lg font-semibold flex items-center gap-3 justify-end p-10">
          <div className="bg-blue-500 rounded-full w-max px-[10px] py-1 font-roboto font-bold text-sm">
            {blog.creatorName.charAt(0)}
          </div>
          <span className="text-sm text-slate-600">{blog.creatorName}</span>
        </div>
        <div className="px-28 py-10">
          <h1 className="text-3xl text-center font-bold">{blog.title}</h1>
          <div
            className="py-10"
            dangerouslySetInnerHTML={{ __html: blog.blogContent }}
          ></div>
          <div className="">
            <div className="flex gap-5">
              <span className="flex items-center gap-1 cursor-pointer">
                <img
                  src={`/preview.svg`}
                  alt={"like"}
                  width={20}
                  className="invert-[.55]"
                />
                <p className="font-poppins text-sm text-slate-600">
                  {blog.views}
                </p>
              </span>
              <span className="flex items-center gap-1 cursor-pointer">
                <img
                  src={`/like.svg`}
                  alt={"like"}
                  width={20}
                  className="invert-[.55]"
                  onClick={handleUpdateBlog}
                />
                <p className="font-poppins text-sm text-slate-600">
                  {blog.likes}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Blog;
