/*
import React from "react";

function Dashboard() {
  // Example dummy items, replace with API call later
  const items = [
    { id: 1, name: "Wallet", type: "Lost", user: "Alice" },
    { id: 2, name: "Phone", type: "Found", user: "Bob" },
  ];

  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Type</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
*/


import React, { useEffect, useState } from "react";
import APIAdmin from "../apiAdmin";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const res = await APIAdmin.get("/items");
      setItems(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Type</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.user?.name || "Unknown"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
