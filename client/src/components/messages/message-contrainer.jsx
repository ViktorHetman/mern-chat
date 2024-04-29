import React from "react";

import { useConversation } from "../../hooks/useConversation";
import MessageInput from "./message-input";
import Messages from "./messages";
import NoChatSelected from "./no-chat-selected";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  React.useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <section className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text text-white">To :</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </section>
  );
};

export default MessageContainer;
