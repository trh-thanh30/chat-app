import useGetConversations from "../hooks/useGetConversations";
import { getRandomEmoji } from "../utils/emojis";
import Conversation from "./Conversation";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex-col py-2 overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        ></Conversation>
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}
