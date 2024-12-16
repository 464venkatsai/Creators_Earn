"use client";

import dynamic from "next/dynamic";
import { createBlog, getBlogPost } from "@/actions/useractions";
import { AlertContext, UserContext } from "@/app/context/context";
import { modules } from "@/data";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import ShortUniqueId from "short-unique-id";

// Dynamically import ReactQuill to disable SSR
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const CreateBlogPage = dynamic(() => import("./CreateBlog"), { ssr: false });

const Create = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateBlogPage />
    </Suspense>
  );
};

export default Create;
