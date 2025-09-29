import React from 'react'
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";

// Initialize socket connection
const socket = io("http://localhost:5000");     // Backend server URL  


const App = () => {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message);
      setChat((prevChat) => [...prevChat, message]);    // Add to local chat
      setMessage(""); // Clear input field
    }
  };


  return (
    <div>
      <h1>Chat Application</h1>
      <div>
        {chat.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App