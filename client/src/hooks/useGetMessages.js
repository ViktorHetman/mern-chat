import React from "react";
import toast from "react-hot-toast";

import { useMessages } from "./useMessages";
import { useConversation } from "./useConversation";

export const useGetMessages = () => {
  const [loading, setLoading] = React.useState(false);
  const { messages, setMessages } = useMessages();
  const { selectedConversation } = useConversation();

  React.useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
