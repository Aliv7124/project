/*
import React, { useEffect, useState } from "react";
import API from "../api";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch user's posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/items"); // fetch logged-in user's posts
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Delete a post
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await API.delete(`/items/${id}`);
      setPosts(posts.filter(post => post._id !== id)); // update UI
      alert("Post deleted successfully!");
    } catch (err) {
      alert("Failed to delete post");
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading posts...</p>;

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">My Posts</h3>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post._id}>
            <div className="card p-3 shadow">
             
              {post.image && (
                <img
                  src={`https://backend-project-9857.onrender.com/uploads/${post.image}`}
                  alt={post.name}
                  className="card-img-top mb-2"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}

              <h5>{post.name}</h5>
              <p><strong>Type:</strong> {post.type}</p>
              <p><strong>Location:</strong> {post.location}</p>
              <p><strong>Date:</strong> {new Date(post.date).toLocaleString()}</p>

              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() => window.location.href = `/item/${post._id}`}
                >
                  View Details
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-center">No posts found.</p>}
      </div>
    </div>
  );
}

export default MyPosts;
*/

import React, { useEffect, useState } from "react";
import API from "../api";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch user's posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/items"); // fetch logged-in user's posts
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Delete a post
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await API.delete(`/items/${id}`);
      setPosts(posts.filter(post => post._id !== id)); // update UI
      alert("Post deleted successfully!");
    } catch (err) {
      alert("Failed to delete post");
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading posts...</p>;

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">My Posts</h3>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post._id}>
            <div className="card p-3 shadow">
             
              {post.image && (
                <img
                  src={post.image} // ✅ Cloudinary URL
                  alt={post.name}
                  className="card-img-top mb-2"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}

              <h5>{post.name}</h5>
              <p><strong>Type:</strong> {post.type}</p>
              <p><strong>Location:</strong> {post.location}</p>
              <p><strong>Date:</strong> {new Date(post.date).toLocaleString()}</p>

              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() => window.location.href = `/item/${post._id}`}
                >
                  View Details
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-center">No posts found.</p>}
      </div>
    </div>
  );
}

export default MyPosts;
