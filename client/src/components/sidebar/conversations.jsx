import Conversation from "./conversation";

const Conversations = () => {
  return (
    <div className="flex flex-col overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
