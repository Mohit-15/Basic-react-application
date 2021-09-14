import { useState, useEffect } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { fetchData: blogs, status, error } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {error && <div>error...</div>}
      {status && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Home;
