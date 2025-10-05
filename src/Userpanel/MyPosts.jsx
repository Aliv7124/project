import React from "react";
import ItemCard from "./ItemCard";

function MyPosts() {
  const dummyItems = [
    { id: 1, type: "Lost", name: "Wallet", location: "Canteen", date: "Oct 4, 2025" },
    { id: 2, type: "Found", name: "Phone", location: "Library", date: "Oct 3, 2025" },
  ];

  return (
    <div>
      <h3 className="mb-4 text-center">My Posts</h3>
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

export default MyPosts;
