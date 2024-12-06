"use server"

import connectDB from "@/db/connectDB"
import Blog from "@/models/Blog.js";


export const createBlog = async (title,description,creatorName,creatorUserName)=>{
    // Creating a blog and inserting to database
    await connectDB();
    const newBlog = new Blog({title:title,description:description,creatorName:creatorName,creatorUserName});
    await newBlog.save()
}

export const fetchBlogPosts = async (username) => {
    // Fetching all the posts of user
    await connectDB();
    const blogPosts = await Blog.find({creatorName:username});
    // Serializing the Posts
    const plainPosts = blogPosts.map(post => ({
        ...post.toObject(),
        _id: post._id.toString(), 
    }));
    return plainPosts
}