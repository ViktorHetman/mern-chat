import MessageContainer from "../components/messages/message-contrainer";
import Sidebar from "../components/sidebar/sidebar";

const Home = () => {
  return (
    <main
      className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      <Sidebar />
      <MessageContainer />
    </main>
  );
};

export default Home;
