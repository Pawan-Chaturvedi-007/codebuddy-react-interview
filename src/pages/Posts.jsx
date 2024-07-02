import { Icon } from "@iconify/react";
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  const getPosts = async () => {
    try {
      const url = "https://codebuddy.review/posts";
      const respose = await fetch(url);
      const result = await respose.json();
      setPosts(result.data);
    } catch (error) {
      console.log("This error is generated from getPosts", error);
    }
  };
  React.useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <div className="rounded-lg bg-white p-7 shadow-lg" key={post.id}>
              <div className="my-4 flex space-x-4">
                <Avatar src={post.avatar} />
                <h2 className="text-2xl font-bold">{`${post.firstName} ${post.lastName}`}</h2>
              </div>
              <img src={post.image} />
              <p className="mt-4 text-gray-700">{post.writeup}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
