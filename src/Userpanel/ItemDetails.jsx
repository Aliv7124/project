import React from "react";

function ItemDetails() {
  const item = {
    type: "Lost",
    name: "Wallet",
    location: "Canteen",
    date: "Oct 4, 2025",
    description: "Black leather wallet with ID and cash inside."
  };

  return (
    <div className="col-md-6 mx-auto card p-4 shadow">
      <h3 className="mb-3">{item.name}</h3>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Date:</strong> {item.date}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <button className="btn btn-primary mt-3 w-100">Contact Owner</button>
    </div>
  );
}

export default ItemDetails;
