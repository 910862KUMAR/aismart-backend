import { useState } from "react";
import { askAi } from "../api/aiApi";

export default function AiAssistant() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, { role: "user", text: message }]);
    setLoading(true);

    try {
      const res = await askAi(message);
      setChat((prev) => [
        ...prev,
        { role: "ai", text: res.reply || "No response" },
      ]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { role: "ai", text: "Error contacting AI service" },
      ]);
    } finally {
      setLoading(false);
      setMessage("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-xl ${
              c.role === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-white shadow"
            }`}
          >
            {c.text}
          </div>
        ))}
        {loading && (
          <div className="bg-white p-3 rounded-xl shadow w-fit">
            AI is typing...
          </div>
        )}
      </div>

      <div className="p-4 border-t flex gap-2 bg-white">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Ask AI..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-5 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
