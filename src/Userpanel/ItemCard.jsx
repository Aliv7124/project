/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapModal from "../components/MapModal";
import ShareButtons from "./ShareButtons";

function ItemCard({ item }) {
  const [showMap, setShowMap] = useState(false);
  const [coords, setCoords] = useState(null);
  const [imgModal, setImgModal] = useState({ open: false, url: "" });

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
        style={{ maxWidth: "180px", margin: "0.1rem", maxHeight: "290px", cursor: "pointer" }}
      >
        {item.image && (
          <div style={{ height: "150px", overflow: "hidden" }}>
            <img
              src={item.image}
              className="card-img-top"
              alt={item.name}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              onClick={() => setImgModal({ open: true, url: item.image })}
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

          <div className="d-flex gap-1 mt-auto">
            <Link
              to={`/item/${item._id}`}
              className="btn btn-primary btn-sm flex-grow-1"
              style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
            >
              View Details
            </Link>

            <button
              className="btn btn-success btn-sm flex-grow-1"
              style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
              onClick={handleViewMap}
            >
            View Map
            </button>
          </div>

          <div className="mt-2 d-flex justify-content-center">
            <ShareButtons item={item} />
          </div>
        </div>
      </div>

     {imgModal.open && (
  <div
    className="modal show d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    onClick={() => setImgModal({ open: false, url: "" })} // click outside closes
  >
    <div
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >
      <div className="modal-content bg-transparent border-0 position-relative">
      
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2"
          aria-label="Close"
          onClick={() => setImgModal({ open: false, url: "" })}
        />
        <img
          src={imgModal.url}
          alt="Full"
          className="img-fluid rounded"
          style={{ maxHeight: "80vh", width: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  </div>
)}

     
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
*/



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MapModal from "../components/MapModal";
import ShareButtons from "./ShareButtons";

function ItemCard({ item, highlight }) {
  const [showMap, setShowMap] = useState(false);
  const [coords, setCoords] = useState(null);
  const [imgModal, setImgModal] = useState({ open: false, url: "" });
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    if (highlight || item.isNew) {
      setIsNew(true);
      const timer = setTimeout(() => setIsNew(false), 3000); // highlight lasts 3s
      return () => clearTimeout(timer);
    }
  }, [highlight, item.isNew]);

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
        className={`card shadow-sm h-100 ${isNew ? "border border-3 border-success" : ""}`}
        style={{
          maxWidth: "180px",
          margin: "0.1rem",
          maxHeight: "290px",
          cursor: "pointer",
          transition: "border 0.3s",
        }}
      >
        {item.image && (
          <div style={{ height: "150px", overflow: "hidden" }}>
            <img
              src={item.image}
              className="card-img-top"
              alt={item.name}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              onClick={() => setImgModal({ open: true, url: item.image })}
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

          <div className="d-flex gap-1 mt-auto">
            <Link
              to={`/item/${item._id}`}
              className="btn btn-primary btn-sm flex-grow-1"
              style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
            >
              View Details
            </Link>

            <button
              className="btn btn-success btn-sm flex-grow-1"
              style={{ fontSize: "0.7rem", padding: "0.25rem 0.4rem" }}
              onClick={handleViewMap}
            >
              View Map
            </button>
          </div>

          <div className="mt-2 d-flex justify-content-center">
            <ShareButtons item={item} />
          </div>
        </div>
      </div>

      {imgModal.open && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setImgModal({ open: false, url: "" })}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-transparent border-0 position-relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-2"
                aria-label="Close"
                onClick={() => setImgModal({ open: false, url: "" })}
              />
              <img
                src={imgModal.url}
                alt="Full"
                className="img-fluid rounded"
                style={{ maxHeight: "80vh", width: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}

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
