import React from "react";
import toast from "react-hot-toast";

import { useConversation } from "./useConversation";
import { useMessages } from "./useMessages";

export const useSendMessage = () => {
  const [loading, setLoading] = React.useState(false);
  const { messages, setMessages } = useMessages();
  const { selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );
      const data = res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};
