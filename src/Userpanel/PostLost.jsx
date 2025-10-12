/*
import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function PostLost() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState(""); // <-- added phone
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("type", "Lost");
    formData.append("date", new Date().toISOString());
    formData.append("phone", phone);

    if (image) formData.append("image", image);

    // Add Authorization header with JWT token
    const token = localStorage.getItem("token"); // or wherever you store it
    await API.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    });

    alert("Lost item posted successfully!");
      const audio = new Audio("/notification.mp3");
    audio.play();
    navigate("/myposts");
  } catch (err) {
    console.error(err.response || err);
    alert(err.response?.data?.message || "Failed to post item");
  }
};

  return (
    <div className="col-md-6 mx-auto card p-4 shadow mt-5">
      <h3 className="mb-4 text-center">Post Lost Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Item Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Location Lost</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Phone Number (Optional)</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostLost;
*/

import React, { useState, useEffect } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

// 🔹 Single socket instance
const socket = io("https://backend-project-w5p1.onrender.com", { withCredentials: true });

function PostLost() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  // 🔹 Listen for live notifications
  useEffect(() => {
    socket.on("newPost", (data) => {
      setNotifications((prev) => [data.message, ...prev]);
      const audio = new Audio("/notification.mp3");
      audio.play();
    });

    return () => socket.off("newPost");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("type", "Lost");
      formData.append("date", new Date().toISOString());
      formData.append("phone", phone);

      if (image) formData.append("image", image);

      const token = localStorage.getItem("token");
      await API.post("/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      alert("Lost item posted successfully!");
      navigate("/myposts");
    } catch (err) {
      console.error(err.response || err);
      alert(err.response?.data?.message || "Failed to post item");
    }
  };

  return (
    <div className="col-md-6 mx-auto card p-4 shadow mt-5">
      <h3 className="mb-4 text-center">Post Lost Item</h3>

      {/* 🔔 Notifications */}
      {notifications.length > 0 && (
        <div className="mb-3">
          {notifications.map((n, idx) => (
            <div key={idx} className="alert alert-info">
              {n}
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Item Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Location Lost</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Phone Number (Optional)</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostLost;
