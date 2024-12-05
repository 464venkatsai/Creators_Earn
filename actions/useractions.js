"use server"

import connectDB from "@/db/connectDB"
import Blog from "@/models/Blog.js";


export const createBlog = async (title,description,creatorName,creatorUserName)=>{
    // Creating a blog and inserting to database
    await connectDB();
    const newBlog = new Blog({title:title,description:description,creatorName:creatorName,creatorUserName});
    await newBlog.save()
}
