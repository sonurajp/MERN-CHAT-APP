import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chats, setChats] = useState();
  const fetchData = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats?.map((data) => (
        <div key={data?._id}>{data?.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
