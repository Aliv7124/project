import React from "react";

function PostFound() {
  return (
    <div className="col-md-6 mx-auto card p-4 shadow">
      <h3 className="mb-4 text-center">Post Found Item</h3>
      <form>
        <div className="mb-3">
          <label>Item Name</label>
          <input type="text" className="form-control" placeholder="Enter item name" />
        </div>
        <div className="mb-3">
          <label>Location Found</label>
          <input type="text" className="form-control" placeholder="Enter location" />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" placeholder="Enter description"></textarea>
        </div>
        <div className="mb-3">
          <label>Upload Image</label>
          <input type="file" className="form-control" />
        </div>
        <button className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
}

export default PostFound;
