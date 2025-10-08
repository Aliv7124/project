
/*
import React from "react";
import { Link } from "react-router-dom";
import MapModal from "../components/MapModal";
import { useState } from "react";
function ItemCard({ item }) {
  const [showMap, setShowMap] = useState(false);
   const locationCoords = item.locationCoords || [22.6756, 88.4300];
  return (
    <>
    <div
      className="card shadow-sm h-100"
      style={{ maxWidth: "180px", margin: "0.25rem" }} // smaller width & spacing
    >
      {item.image && (
        <div style={{ height: "150px", overflow: "hidden" }}> 
          <img
            src={item.image} // ✅ Cloudinary URL
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
                      <button
              className="btn btn-success btn-sm"
              style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
              onClick={() => setShowMap(true)}
            >
              View on Map
            </button>

        </div>
      </div>
    </div>
     <MapModal
        show={showMap}
        handleClose={() => setShowMap(false)}
        location={locationCoords}
        name={item.name}
      />
          </>

  );
}

export default ItemCard;
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapModal from "../components/MapModal";

function ItemCard({ item }) {
  const [showMap, setShowMap] = useState(false);
  const [coords, setCoords] = useState(null);

  const handleViewMap = async () => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(item.location)}`
      );
      const data = await res.json();
      if (data.length > 0) {
        setCoords({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        });
        setShowMap(true);
      } else {
        alert("Could not find location coordinates.");
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching location.");
    }
  };

  return (
    <>
    
 <div
  className="card shadow-sm h-100"
  style={{ maxWidth: "180px", margin: "0.1rem" }} // smaller margin
>
  {item.image && (
    <div style={{ height: "150px", overflow: "hidden" }}>
      <img
        src={item.image}
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
    <div className="mt-auto d-flex justify-content-between">
      <Link
        to={`/item/${item._id}`}
        className="btn btn-primary btn-sm"
        style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
      >
        View Details
      </Link>
      <button
        className="btn btn-success btn-sm"
        style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
        onClick={handleViewMap}
      >
        View on Map
      </button>
    </div>
  </div>
</div>
     
      {coords && (
        <MapModal
          show={showMap}
          onClose={() => setShowMap(false)}
          latitude={coords.lat}
          longitude={coords.lng}
          name={item.name}
          location={item.location}
        />
      )}
    </>
  );
}

export default ItemCard;


