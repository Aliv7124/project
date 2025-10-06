
import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div
      className="card shadow-sm h-100"
      style={{ maxWidth: "180px", margin: "0.25rem" }} // smaller width & spacing
    >
      {item.image && (
        <div style={{ height: "150px", overflow: "hidden" }}> 
          <img
            src={`https://backend-project-9857.onrender.com/uploads/${item.image}`}
            className="card-img-top"
            alt={item.name}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
      )}

      <div className="card-body d-flex flex-column p-2"> 
        <h6 className="card-title fw-bold mb-1" style={{ fontSize: "0.85rem" }}>
          {item.name}
        </h6>
        <p className="card-text flex-grow-1 mb-1" style={{ fontSize: "0.75rem" }}>
          <strong>Type:</strong> {item.type} <br />
          <strong>Location:</strong> {item.location} <br />
          <small className="text-muted">{new Date(item.date).toLocaleString()}</small>
        </p>

        <div className="mt-auto d-flex justify-content-center">
          <Link
            to={`/item/${item._id}`}
            className="btn btn-primary btn-sm"
            style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }} // smaller button
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
