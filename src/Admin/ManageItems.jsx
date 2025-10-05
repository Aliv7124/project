import React, { useState } from "react";

function ManageItems() {
  // Dummy items
  const [items, setItems] = useState([
    { id: 1, name: "Wallet", type: "Lost", location: "Canteen", user: "Alice" },
    { id: 2, name: "Phone", type: "Found", location: "Library", user: "Bob" },
    { id: 3, name: "Bag", type: "Lost", location: "Lecture Hall", user: "Charlie" },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Manage Items</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.location}</td>
              <td>{item.user}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageItems;
