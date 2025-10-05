import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold">{item.name}</h5>
        <p className="card-text">
          <strong>Type:</strong> {item.type} <br />
          <strong>Location:</strong> {item.location} <br />
          <small className="text-muted">Date: {item.date}</small>
        </p>
        <Link to={`/item/${item.id}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
