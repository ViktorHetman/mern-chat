import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Search for someone..."
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-800 group"
      >
        <IoSearchSharp className="w-6 h-6 outline-none transition group-hover:scale-125 duration-300 group-active:scale-100" />
      </button>
    </form>
  );
};

export default SearchInput;
