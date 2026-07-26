import { useState } from "react";
import Sidebar from "../components/Sidebar";

function ChatPage() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askMemora = () => {

    if (!question) return;

    setLoading(true);

    setTimeout(() => {

      setAnswer(`
Decision Found

Pricing strategy changed after enterprise churn increased by 14%.

Sources:
• Executive Meeting #42
• Revenue Analysis Report
• Pricing Committee Notes

Confidence: 94%
      `);

      setLoading(false);

    }, 2000);

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
            placeholder="Why was enterprise pricing changed?"
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
          />

          <button
            onClick={askMemora}
            className="mt-4 px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold"
          >
            Ask Memora
          </button>

          {loading && (
            <div className="mt-6 text-cyan-400 animate-pulse">
              Memora is analyzing organizational memory...
            </div>
          )}

          {answer && !loading && (
            <div className="mt-8 bg-black/30 p-6 rounded-2xl whitespace-pre-line">
              {answer}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ChatPage;