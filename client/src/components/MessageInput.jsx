import { BsSend } from "react-icons/bs";
export default function MessageInput() {
  return (
    <div className="px-4 my-3">
      <div className="relative w-full">
        <input
          type="text"
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button className="absolute inset-y-0 flex items-center end-0 pe-3">
          <BsSend></BsSend>
        </button>
      </div>
    </div>
  );
}
