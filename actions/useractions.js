"use server";

import connectDB from "@/db/connectDB";
import Blog from "@/models/Blog.js";
import User from "@/models/User";

// User CRUD Operations
export const loginUser = async (email)=>{
  await connectDB();
  const user = await User.findOne({email:email});
  if(!user){
    throw new Error(`${email} doesn't exists`)
  }
  const plainUser = {
    ...user.toObject(),
    _id: user._id.toString(),
  };
  return plainUser
}

export const createUser = async (userId,email,password) => {
  await connectDB();
  const newUser = new User({
    userId:userId,
    name:userId,
    email:email,
    password:password,
    tagLine: "",
    profileImage:"",
    coverImage:""
  })
  await newUser.save()
}

export const updateUser = async (name,password,tagLine,profileImage,coverImage) => {
  await connectDB();
  await Blog.findOneAndUpdate({
    name:name,
    password:password,
    tagLine: tagLine,
    profileImage:profileImage,
    coverImage:coverImage
  })
}


// Blog CRUD Operations
export const createBlog = async (
  id,
  userId,
  title,
  description,
  blogContent,
  creatorName,
  likes,
  views,
) => {
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
      likes: likes,
      views : views
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

export const deleteBlogPost = async (blogId) => {
  await connectDB();
  await Blog.findOneAndDelete({ blogId: blogId });
};

export const fetchBlogPosts = async (username) => {
  // Fetching all the posts of user
  await connectDB();
  const blogPosts = await Blog.find({ creatorName: username });
  // Serializing the Posts
  const plainPosts = blogPosts.map((post) => ({
    ...post.toObject(),
    _id: post._id.toString(),
  }));
  return plainPosts;
};

export const fetchTrendingBlogs = async () => {
  await connectDB();
  const trendingBlogs = await Blog.find().limit(5);
  const plainPosts = trendingBlogs.map((post) => ({
    ...post.toObject(),
    _id: post._id.toString(),
  }));
  return plainPosts;
};
