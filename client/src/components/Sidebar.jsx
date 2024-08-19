import Conversations from "./Conversations";
import LogOutButton from "./LogOutButton";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  return (
    <div className="flex flex-col p-4 border-r border-slate-500">
      <SearchInput />
      <div className="px-3 divider"></div>
      <Conversations />

      <LogOutButton />
    </div>
  );
}
