// src/context/NotificationProvider.jsx
import React, { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

// Create context
const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const socketRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize socket
    
     socketRef.current = io("https://backend-project-9857.onrender.com"); 
    const socket = socketRef.current;

    // Preload notification audio
    audioRef.current = new Audio("/notification.mp3");
    audioRef.current.load();

    // Request browser notification permission
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    // Notification helper
    const notify = (message) => {
      // Play audio
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

      // Browser notification
      if (Notification.permission === "granted") {
        new Notification("Lost & Found", { body: message });
      } else {
        console.log("Notification:", message);
      }
    };

    // Socket event listeners
    socket.on("newItem", (data) => notify(data.message));
    socket.on("updateItem", (data) => notify(data.message));
    socket.on("deleteItem", (data) => notify(data.message));
    socket.on("newComment", (data) =>
      notify(`New comment on item ${data.itemId}`)
    );

    // Cleanup on unmount
    return () => {
      socket.off("newItem");
      socket.off("updateItem");
      socket.off("deleteItem");
      socket.off("newComment");
      socket.disconnect();
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use notification context
export const useNotification = () => useContext(NotificationContext);
