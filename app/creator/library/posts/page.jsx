"use client";
import { fetchBlogPosts } from "@/actions/useractions";
import { UserContext } from "@/app/context/context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Posts = () => {
  const [post, setPost] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (user?.name) {
          const blogPosts = await fetchBlogPosts(user.name);
          console.log(blogPosts);
          setPost(blogPosts);
        }
      } catch (error) {
        console.error("Error fetching Blog posts:", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="w-full h-full p-10">
      <div className="bg-[whitesmoke] p-10 flex justify-center gap-[8rem]">
        <div>
          <h2 className="text-3xl font-poppins font-semibold my-5">
            People Needs Creators Like You
          </h2>
          <p className="font-poppins text-lg">
            Your Supports Love To See Your Creative Work
          </p>
          <Link href={"/creator/create"}>
            <button className="gradient text-white font-poppins font-semibold mt-10 px-5 py-3 rounded-lg">
              Start Creating Content
            </button>
          </Link>
        </div>
        <div className="">
          <img src="/creator.png" alt="" />
        </div>
      </div>
      <div className="my-[5rem]">
        <h2 className="text-3xl font-poppins font-semibold my-5 text-center">
          Recent Work
        </h2>
        <div>
          {post.length === 0 ? (
            <p>no Recent Work</p>
          ) : (
            post.map((blog, id) => {
              return (
                <div key={id} className="bg-[whitesmoke] rounded-xl p-10 my-5">
                  <h3 className="font-nunito font-bold text-2xl my-5">
                    {blog.title.slice(0, 60)} {blog.title.length > 60 && ".."}
                  </h3>
                  <p className="text-base leading-relaxed font-poppins">
                    {blog.description.slice(0, 500)}...
                  </p>
                  <div className="mt-5 flex justify-between">
                    <div className="flex gap-5">
                      {["like.svg", "comment.svg"].map((img, id) => {
                        return (
                          <img
                            key={id}
                            src={`/${img}`}
                            alt={img}
                            width={20}
                            className="invert-[.55]"
                          />
                        );
                      })}
                    </div>
                    <div>
                      <Link href={"/creator/create"} className="w-full">
                        <button className="w-full border-[1px] rounded-lg border-solid border-gray-400 flex items-center justify-center leading-tight font-poppins font-[500] text-sm px-5 py-3 gap-2 shadow-inside hover:bg-[#e6e7ee]">
                          <img src="/create.svg" alt="create.svg" width={20} />
                          <h3 className="">Update</h3>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
