import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  return (
    <div>
      <SearchInput />
      <div className="px-3 divider"></div>
      <Conversations />

      <LogOutButton />
    </div>
  );
}
