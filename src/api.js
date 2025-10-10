import axios from "axios";

// Base API instance
const API = axios.create({
  baseURL: "https://backend-project-w5p1.onrender.com/api", // Your backend URL
});

// Attach JWT token to requests
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// Automatically attach token from localStorage on app start
const token = localStorage.getItem("token");
if (token) setAuthToken(token);

// =====================
// Auth routes
// =====================
export const signupUser = (data) => API.post("/auth/signup", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const facebookLogin = (data) => API.post("/auth/facebook-login", data);
export const getCurrentUser = () => API.get("/auth/me");

// =====================
// Items routes
// =====================
export const getUserItems = () => API.get("/items"); // Logged-in user's items
export const createUserItem = (data) => API.post("/items", data);
export const deleteUserItem = (id) => API.delete(`/items/${id}`);
export const getAllItems = () => API.get("/items/all"); // Public route
export const updateUserItem = (id, data) => API.put(`/items/${id}`, data);
// =====================
// Comment routes
// =====================
export const getItemComments = (itemId) => API.get(`/comments/item/${itemId}`); // Fetch comments for an item
export const addComment = (itemId, data) => API.post(`/comments/item/${itemId}`, data); // Add comment to item
export const deleteComment = (commentId) => API.delete(`/comments/${commentId}`); // Delete comment

export const generateDescription = (name) =>
  API.post("/items/ai/description", { name });




// =====================
// Export API instance
// =====================
export default API;
