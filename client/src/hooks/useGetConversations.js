import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        setLoading(false);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
}
