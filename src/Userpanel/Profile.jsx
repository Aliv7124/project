import React from "react";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joined: "Jan 10, 2025"
  };

  return (
    <div className="col-md-5 mx-auto card p-4 shadow">
      <h3 className="mb-4 text-center">User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Joined:</strong> {user.joined}</p>
      <button className="btn btn-warning mt-3 w-100">Edit Profile</button>
    </div>
  );
}

export default Profile;
