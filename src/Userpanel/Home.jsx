/*
import React from "react";
import ItemCard from "./ItemCard"

function Home() {
  const dummyItems = [
    { id: 1, type: "Lost", name: "Wallet", location: "Canteen", date: "Oct 4, 2025" },
    { id: 2, type: "Found", name: "Phone", location: "Library", date: "Oct 3, 2025" },
  ];

  return (
    <div>
      <h2 className="text-center mb-4 fw-bold">Recent Lost & Found Items</h2>
      <div className="row">
        {dummyItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
*/



import React from "react";
import ItemCard from "./ItemCard";

function Home() {
  const dummyItems = [
    { id: 1, type: "Lost", name: "Wallet", location: "Canteen", date: "Oct 4, 2025" },
    { id: 2, type: "Found", name: "Phone", location: "Library", date: "Oct 3, 2025" },
    { id: 3, type: "Lost", name: "Keys", location: "Auditorium", date: "Oct 2, 2025" },
    { id: 4, type: "Found", name: "Bag", location: "Bus Stop", date: "Oct 1, 2025" },
  ];

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
        {dummyItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
