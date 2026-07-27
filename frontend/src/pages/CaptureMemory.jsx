import { useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function CaptureMemory() {
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [memory, setMemory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const uploadFile = async () => {
    if (!file) {
      setError("Please select a meeting transcript file first.");
      return;
    }
    setError("");
    setUploaded(false);
    setMemory(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await api.post("/upload", formData);

      if (response.data && response.data.memory) {
        setMemory(response.data.memory);
        setUploaded(true);
      } else {
        throw new Error("Invalid response format received from AI.");
      }
    } catch (err) {
      console.error(err);
      setError("Upload failed! Please check if the backend server is running and the Gemini API key is valid.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#03060f] via-[#07112d] to-[#020714] text-white">
      <Sidebar />

      <div className="flex-1 p-12">
        <h1 className="text-6xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Capture Organizational Memory
        </h1>

        <div className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-6">
            <label className="cursor-pointer px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl text-black font-semibold transition duration-300">
              📄 Choose Meeting
              <input
                type="file"
                accept=".txt"
                className="hidden"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setError("");
                }}
              />
            </label>

            {file && (
              <span className="text-cyan-300 truncate max-w-xs font-medium">
                ✅ {file.name}
              </span>
            )}

            <button
              onClick={uploadFile}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 font-semibold"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6">
              ⚠️ {error}
            </div>
          )}

          {loading && (
            <div className="flex items-center gap-3 mt-4 text-cyan-400 animate-pulse bg-cyan-500/5 p-4 rounded-xl border border-cyan-500/10">
              <div className="w-5 h-5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
              <span>Processing meeting transcript with Memora AI...</span>
            </div>
          )}

          {uploaded && memory && (
            <div className="space-y-6 mt-6">
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl">
                ✓ Meeting Uploaded and Processed Successfully!
              </div>

              {memory.title && (
                <div className="bg-cyan-500/5 border border-cyan-500/10 p-5 rounded-2xl">
                  <strong className="text-cyan-400 font-semibold uppercase text-xs tracking-wider">📌 Title</strong>
                  <div className="mt-2 text-white text-lg font-medium">{memory.title}</div>
                </div>
              )}

              {memory.summary && (
                <div className="bg-purple-500/5 border border-purple-500/10 p-5 rounded-2xl">
                  <strong className="text-purple-400 font-semibold uppercase text-xs tracking-wider">📝 Summary</strong>
                  <div className="mt-2 text-zinc-300 text-sm leading-relaxed">{memory.summary}</div>
                </div>
              )}

              {memory.decision && (
                <div className="bg-green-500/5 border border-green-500/10 p-5 rounded-2xl">
                  <strong className="text-green-400 font-semibold uppercase text-xs tracking-wider">✅ Key Decision</strong>
                  <div className="mt-2 text-zinc-200 text-sm font-medium">{memory.decision}</div>
                </div>
              )}

              {memory.tasks && memory.tasks.length > 0 && (
                <div className="bg-yellow-500/5 border border-yellow-500/10 p-5 rounded-2xl">
                  <strong className="text-yellow-400 font-semibold uppercase text-xs tracking-wider">📋 Action Items</strong>
                  <ul className="list-disc ml-6 mt-3 text-zinc-300 text-sm space-y-1">
                    {memory.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}

              {memory.risks && memory.risks.length > 0 && (
                <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl">
                  <strong className="text-red-400 font-semibold uppercase text-xs tracking-wider">⚠️ Identified Risks</strong>
                  <ul className="list-disc ml-6 mt-3 text-zinc-300 text-sm space-y-1">
                    {memory.risks.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t border-white/5 text-zinc-400 text-sm">
            <div className="bg-cyan-500/5 border border-cyan-500/10 p-4 rounded-xl flex items-center justify-center gap-2">
              <span>📄</span> Meeting Transcript Indexed
            </div>
            <div className="bg-purple-500/5 border border-purple-500/10 p-4 rounded-xl flex items-center justify-center gap-2">
              <span>🧠</span> Decision Extraction Done
            </div>
            <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl flex items-center justify-center gap-2">
              <span>⚠️</span> Risk Detection Active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptureMemory;