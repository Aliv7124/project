/*
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
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

export const loginUser = (data) => API.post("/auth/login", data);
export const signupUser = (data) => API.post("/auth/signup", data);
export const getUserItems = () => API.get("/items");
export const createUserItem = (data) => API.post("/items", data);
export const deleteUserItem = (id) => API.delete(`/items/${id}`);
export const getAllItems = () => API.get("/items");


export default API;
*/

import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-project-9857.onrender.com/api", // backend URL
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

export const loginUser = (data) => API.post("/auth/login", data);
export const signupUser = (data) => API.post("/auth/signup", data);
export const getUserItems = () => API.get("/items"); // logged-in user's items
export const createUserItem = (data) => API.post("/items", data);
export const deleteUserItem = (id) => API.delete(`/items/${id}`);

// ✅ Public route for all items
export const getAllItems = () => API.get("/items/all");

export default API;
