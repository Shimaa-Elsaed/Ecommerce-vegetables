import React from "react";
import BlogDetails from "./BlogDetails";
import Comments from "./Comments";
import Footer from "@/components/footer/Footer";
import StayHome from "../About/StayHome";

const Blog = () => {
  return (
    <div>
      <BlogDetails />
      <Comments />
      <StayHome />

      <Footer />
    </div>
  );
};

export default Blog;
