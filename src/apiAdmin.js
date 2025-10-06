import axios from "axios";

const APIAdmin = axios.create({
  baseURL: "https://backend-project-9857.onrender.com/api/admin",
 // Admin backend base URL
});

// Attach admin JWT token to requests
export const setAdminToken = (token) => {
  if (token) {
    APIAdmin.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete APIAdmin.defaults.headers.common["Authorization"];
  }
};

// Automatically attach token from localStorage on app start
const token = localStorage.getItem("adminToken");
if (token) setAdminToken(token);

// Admin auth
export const loginAdmin = (data) => APIAdmin.post("/login", data);
export const signupAdmin = (data) => APIAdmin.post("/signup", data);

// Get all users/items (admin only)
export const getAllUsers = () => APIAdmin.get("/users");
export const getAllItems = () => APIAdmin.get("/items");

// Delete user/item (admin only)
export const deleteUser = (id) => APIAdmin.delete(`/users/${id}`);
export const deleteItem = (id) => APIAdmin.delete(`/items/${id}`);

export default APIAdmin;
