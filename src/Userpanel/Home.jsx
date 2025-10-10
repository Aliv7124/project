/*
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { getAllItems } from "../api"; // ✅ fetch all items, not just user's

function Home() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const { data } = await getAllItems(); // fetch all posts
      setItems(data); // save in state
    } catch (err) {
      console.error("Error fetching items:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Remove deleted item from state
  const handleDelete = (deletedId) => {
    setItems(items.filter((item) => item._id !== deletedId));
  };

  return (
    <div className="container py-5" style={{ minHeight: "90vh" }}>
      <h2
        className="text-center mb-5 fw-bold"
        style={{
          background: "linear-gradient(90deg, #06beb6, #48b1bf)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        Recent Lost & Found Items
      </h2>

      <div className="row">
        {items.length === 0 ? (
          <p className="text-center">No items found.</p>
        ) : (
          items.map((item) => (
            <div key={item._id} className="col-md-2 mb-4">
              <ItemCard item={item} onDelete={handleDelete} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
*/


import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { getAllItems } from "../api";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  const fetchItems = async () => {
    try {
      const { data } = await getAllItems();
      setItems(data);
    } catch (err) {
      console.error("Error fetching items:", err.response?.data || err.message);
    } finally {
      setLoading(false); // ✅ done loading
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Remove deleted item from state
  const handleDelete = (deletedId) => {
    setItems(items.filter((item) => item._id !== deletedId));
  };

  if (loading) {
    return <p className="text-center py-5">Loading items...</p>; // ✅ show while waiting
  }

  return (
    <div className="container py-5" style={{ minHeight: "90vh" }}>
      <h2
        className="text-center mb-5 fw-bold"
        style={{
          background: "linear-gradient(90deg, #06beb6, #48b1bf)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        Recent Lost & Found Items
      </h2>

      <div className="row">
        {items.length === 0 ? (
          <p className="text-center">No items found.</p>
        ) : (
          items.map((item) => (
            <div key={item._id} className="col-md-2 mb-4">
              <ItemCard item={item} onDelete={handleDelete} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
