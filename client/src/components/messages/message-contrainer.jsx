import MessageInput from "./message-input";
import Messages from "./messages";
import NoChatSelected from "./no-chat-selected";

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <section className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text text-white">To :</span>{" "}
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </section>
  );
};

export default MessageContainer;
