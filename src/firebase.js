// firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// 🔹 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAxvIUYzDHnh0qA7Tr9JZvuiRslvbi9Ruk",
  authDomain: "lost-and-found-8c75c.firebaseapp.com",
  projectId: "lost-and-found-8c75c",
  storageBucket: "lost-and-found-8c75c.firebasestorage.app",
  messagingSenderId: "249983120157",
  appId: "1:249983120157:web:f73a9a975404c52e1727f4",
  measurementId: "G-2WQTGFJX2E"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Get Messaging instance
export const messaging = getMessaging(app);

// 🔹 Request permission and get FCM token
export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BCbdf4RHw-5m49VxpsZK7ph_zuX4MlmSTqtQPgQ5qogemEhkvLzmGycsLVQdlK8Hy3YvigIiHuVsydT4r2Uv91k"
      });
      console.log("FCM Token:", token);
      return token; // send to backend
    } else if (permission === "denied") {
      console.warn("User has blocked notifications. Ask them to enable it in browser settings.");
    } else {
      console.log("Notification permission not granted");
    }

  } catch (err) {
    console.error("FCM error:", err);
  }
};

// 🔹 Listen for foreground messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
