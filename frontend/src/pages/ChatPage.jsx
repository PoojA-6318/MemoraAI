import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function ChatPage() {
  const [searchParams] = useSearchParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askMemoraDirectly = async (qText) => {
    if (!qText.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      const response = await api.post("/ask", { question: qText.trim() });
      setAnswer(response.data.answer);
    } catch (err) {
      console.error("AI chatbot query failed:", err);
      setAnswer("Sorry, I encountered an error while searching the organizational memory.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuestion(q);
      askMemoraDirectly(q);
    }
  }, [searchParams]);

  const askMemora = () => {
    askMemoraDirectly(question);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <Sidebar />

      <div className="flex-1 p-12">
        <h1 className="text-6xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Ask Memora
        </h1>

        <div className="bg-white/5 rounded-3xl p-8">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") askMemora();
            }}
            placeholder="Why was enterprise pricing changed?"
            className="w-full p-4 rounded-xl bg-black/40 outline-none focus:border-cyan-500 border border-transparent transition"
          />

          <button
            onClick={askMemora}
            disabled={loading}
            className="mt-4 px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold disabled:opacity-50 hover:bg-cyan-400 transition"
          >
            {loading ? "Asking..." : "Ask Memora"}
          </button>

          {loading && (
            <div className="mt-6 text-cyan-400 animate-pulse">
              Memora is analyzing organizational memory...
            </div>
          )}

          {answer && !loading && (
            <div className="mt-8 bg-black/30 p-6 rounded-2xl whitespace-pre-wrap leading-relaxed text-zinc-300">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;