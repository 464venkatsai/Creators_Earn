import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  blogId : {type: String, required: true},
  username:{type:String,required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  blogContent : {type:String, required:true},
  creatorName: { type: String, required: true },
  likes : {type:Number,required:true},
  views : {type:Number, required: true},
  tags: { type: [String], default: [] },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
