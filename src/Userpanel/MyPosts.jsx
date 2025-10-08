
import React, { useEffect, useState } from "react";
import API from "../api";
import ShareButtons from "./ShareButtons";
function MyPosts({item}) {
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
  <div className="row g-2"> {/* gutter controls spacing between cards */}
    {posts.map((post) => (
      <div className="col-6 col-md-2" key={post._id}>
        <div className="card p-3 shadow h-100 d-flex flex-column">
          {post.image && (
            <img
              src={post.image}
              alt={post.name}
              className="card-img-top"
              style={{ maxHeight: "150px", objectFit: "cover" }}
            />
          )}

          <h6 style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>{post.name}</h6>
          <p style={{ fontSize: "0.7rem", margin: "0" }}><strong>Type:</strong> {post.type}</p>
          <p style={{ fontSize: "0.7rem", margin: "0" }}><strong>Location:</strong> {post.location}</p>
          <p style={{ fontSize: "0.65rem", margin: "0.25rem 0" }}>
            <strong>Date:</strong> {new Date(post.date).toLocaleString()}
          </p>

          <div className=" d-flex gap-3 justify-content-center mt-2">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => window.location.href = `/item/${post._id}`}
              style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
            >
              View Details
            </button>
           

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(post._id)}
              style={{ fontSize: "0.7rem" , padding: "0.25rem 0.4rem"}}
            >
              Delete
            </button>
          </div>
           <div className="mt-2 d-flex justify-content-center">
  <ShareButtons item={post} />
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
