export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.pravatar.cc/300" alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is up??
      </div>
      <div className="items-center text-xs opacity-50 chat-footer">12:42</div>
    </div>
  );
}
