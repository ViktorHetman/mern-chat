import Conversations from "./conversations";
import LogoutButton from "./logout-button";
import SearchInput from "./search-input";

const Sidebar = () => {
  return (
    <aside className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </aside>
  );
};

export default Sidebar;
