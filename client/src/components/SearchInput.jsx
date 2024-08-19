import { IoSearchSharp } from "react-icons/io5";
export default function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-full input input-bordered"
      />
      <button className="text-white btn btn-circle bg-sky-500">
        <IoSearchSharp className="w-6 h-6 outline-none"></IoSearchSharp>
      </button>
    </form>
  );
}
