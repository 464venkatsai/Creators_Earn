"use client";
import { deleteBlogPost, fetchBlogPosts } from "@/actions/useractions";
import { AlertContext, UserContext } from "@/app/context/context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const { Alert, setAlert } = useContext(AlertContext);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteBlogPost(id);
      setAlert({ ...Alert, message: "Deleted Blog Successfully", time: 3000 });
      setPost(post.filter((blog) => blog.blogId !== id));
    } catch (error) {
      console.error("Error deleting the blog post:", error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (user?.name) {
          const blogPosts = await fetchBlogPosts(user.name);
          setPost(blogPosts);
        }
      } catch (error) {
        console.error("Error fetching Blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full h-full p-10 overflow-y-scroll scrollable-none">
      <div className="bg-[whitesmoke] p-10 flex justify-center gap-[8rem]">
        <div>
          <h2 className="text-3xl font-poppins font-semibold my-5">
            People Need Creators Like You
          </h2>
          <p className="font-poppins text-lg">
            Your supporters love to see your creative work.
          </p>
          <Link href={"/creator/create"}>
            <button className="gradient text-white font-poppins font-semibold mt-10 px-5 py-3 rounded-lg">
              Start Creating Content
            </button>
          </Link>
        </div>
        <div>
          <img src="/creator.png" alt="" />
        </div>
      </div>
      <div className="my-[5rem]">
        <h2 className="text-3xl font-poppins font-semibold my-5 text-center">
          Recent Work
        </h2>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : post.length === 0 ? (
            <p>No Recent Work</p>
          ) : (
            post.map((blog) => (
              <div key={blog.blogId} className="bg-[whitesmoke] rounded-xl p-10 my-5">
                <h3 className="font-nunito font-bold text-2xl my-5">
                  {blog.title.slice(0, 60)} {blog.title.length > 60 && "..."}
                </h3>
                <p className="text-base leading-relaxed font-poppins">
                  {blog.description.slice(0, 500)}...
                </p>
                <div className="mt-5 flex justify-between">
                  <div className="flex gap-5">
                    <span className="flex items-center gap-1">
                      <img
                        src={`/preview.svg`}
                        alt={"views"}
                        width={20}
                        className="invert-[.55]"
                      />
                      <p className="font-poppins text-sm text-slate-600">{blog.views || 0}</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <img
                        src={`/like.svg`}
                        alt={"likes"}
                        width={20}
                        className="invert-[.55]"
                      />
                      <p className="font-poppins text-sm text-slate-600">{blog.likes || 0}</p>
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <Link href={`/creator/create/?id=${blog.blogId}`} className="w-full">
                      <button className="w-full border-[1px] rounded-lg border-solid border-gray-400 flex items-center justify-center leading-tight font-poppins font-[500] text-sm px-5 py-3 gap-2 shadow-inside hover:bg-[#e6e7ee]">
                        <img src="/create.svg" alt="update" width={20} />
                        <h3>Update</h3>
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.blogId)}
                      className="w-full border-[1px] rounded-lg border-solid border-gray-400 flex items-center justify-center leading-tight font-poppins font-[500] text-sm px-5 py-3 gap-2 shadow-inside hover:bg-red-600 hover:text-white hover:shadow-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
