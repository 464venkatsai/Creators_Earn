"use server"

import connectDB from "@/db/connectDB"
import Blog from "@/models/Blog.js";


export const createBlog = async (id, userId, title, description, blogContent, creatorName) => {
    // Connect to the database
    await connectDB();
  
    // Handle both creation and update 
    await Blog.findOneAndUpdate(
      { blogId: id }, 
      {
        blogId: id,
        userId: userId,
        title: title,
        description: description,
        blogContent: blogContent,
        creatorName: creatorName,
      },
      { upsert: true, new: true }
    );
  };

  export const getBlogPost = async (blogId) => {
    // Fetching a Single Post
    await connectDB();
    const blogPost = await Blog.findOne({ blogId: blogId }); 
    if (!blogPost) {
      throw new Error(`Blog with ID ${blogId} not found.`);
    }
  
    // Serialize the blog post
    const plainPost = {
      ...blogPost.toObject(),
      _id: blogPost._id.toString(),
    };
  
    return plainPost;
  };

  export const deleteBlogPost = async (blogId)=>{
    await connectDB();
    await Blog.findOneAndDelete({blogId:blogId})
    
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