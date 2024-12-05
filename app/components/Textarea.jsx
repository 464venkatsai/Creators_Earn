"use client"
import React, { useState } from "react";

const Textarea = ({blog,setBlog}) => {

  return (
    <div>
      <textarea
        className="w-full min-h-screen bg-white shadow-lg p-[5rem] outline-none font-poppins scrollable-none "
        name="description"
        value={blog.description}
        placeholder="Your Supports Are Waiting For Your Content."
        onChange={(e)=>setBlog({...blog,[e.target.name]:e.target.value})}
      >
      </textarea>
    </div>
  );
};

export default Textarea;
