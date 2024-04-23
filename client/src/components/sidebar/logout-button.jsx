import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className="w-6 h-6 text-white cursor-pointer transition hover:translate-x-1 duration-300" />
    </div>
  );
};

export default LogoutButton;
