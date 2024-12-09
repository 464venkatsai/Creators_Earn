"use client";
import { fetchTrendingBlogs } from "@/actions/useractions";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

const Community = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const trendingPosts = await fetchTrendingBlogs();
      setTrending(trendingPosts);
    };
    fetchAllBlogs();
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#e6e7ee] p-10 font-poppins overflow-y-scroll scrollable-none">
      <nav className="flex font-poppins justify-between text-slate-600 items-center px-10">
        <div className="flex relative">
          <img
            src="/search.svg"
            alt="search"
            width={25}
            className="invert-[.55] absolute left-4 top-4 outline-none"
          />
          <input
            type="text"
            placeholder="Search Any Content"
            className="font-poppins font-semibold text-sm px-16 py-4 shadow-inside rounded-full border-none outline-none h-14 w-[35vw]"
          />
        </div>
        <div className="flex gap-6 text-sm">
          <Link href={"/creator/library/collection"}>
            <button className="font-poppins bg-white px-6 items-center shadow-outer flex gap-4 rounded-full h-14  font-semibold">
              <img
                src="/collection.svg"
                alt="collection.svg"
                width={19}
                className="invert-[.25] fill-slate-500"
              />
              <p>Your Collections</p>
            </button>
          </Link>
          <Link href={"/creator/library/community"}>
            <button className="font-poppins bg-white px-6 items-center shadow-outer flex gap-2 rounded-full h-14 font-semibold">
              Your Community
            </button>
          </Link>
        </div>
      </nav>
      <div className="m-10 p-2 rounded-xl text-blue-800 shadow-inside">
        <div className="bg-[#d3e0e8] p-10 flex justify-center gap-[8rem] rounded-xl">
          <div>
            <h2 className="text-3xl font-poppins font-semibold mt-10 my-5">
              Discover, Create and Explore
            </h2>
            <p className="font-poppins text-base leading-loose">
              Content that connects, stories that inspire.
            </p>
            <Link href={"/creator/create"}>
              <button className="gradient text-white font-poppins font-semibold mt-5 px-5 py-3 rounded-lg">
                Start Creating Content
              </button>
            </Link>
          </div>
          <div>
            <img
              src="/creator female.jpg"
              alt="creater.png"
              className="w-[18vw]"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-10">
        <h1 className="text-3xl font-semibold">Trending Content</h1>
        <div>
          {trending.map((blog, id) => {
            return (
              <div key={id} className="my-10 shadow-lg rounded-2xl bg-[whitesmoke]">
                <Link href={`/blog/${blog.title}/?id=${blog.blogId}`}>
                  <div className="p-10 my-5">
                    <h3 className="font-nunito font-bold text-2xl my-5">
                      {blog.title.slice(0, 60)} {blog.title.length > 60 && ".."}
                    </h3>
                    <p className="text-base leading-relaxed font-poppins">
                      {blog.description.slice(0, 500)}...
                    </p>
                    <div className="mt-5 flex justify-between">
                      <div className="flex gap-5">
                        <span className="flex items-center gap-1">
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
                        <span className="flex items-center gap-1">
                          <img
                            src={`/like.svg`}
                            alt={"like"}
                            width={20}
                            className="invert-[.55]"
                          />
                          <p className="font-poppins text-sm text-slate-600">
                            {blog.likes}
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Community);
