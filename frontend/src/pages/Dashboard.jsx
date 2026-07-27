import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ParticlesBg from "../components/ParticlesBg";
import BrainMap from "../components/BrainMap";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchVal, setSearchVal] = useState("");

  // Ask Memora Card State
  const [dashQuestion, setDashQuestion] = useState("Why did we move away from flat enterprise pricing?");
  const [dashAnswer, setDashAnswer] = useState("Three linked memories indicate the decision followed Q3 churn analysis and executive approval.");
  const [dashLoading, setDashLoading] = useState(false);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const response = await api.get("/timeline");
        setTimeline(response.data);
      } catch (err) {
        console.error("Error fetching timeline for dashboard:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTimeline();
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchVal.trim()) {
      navigate(`/chat?q=${encodeURIComponent(searchVal.trim())}`);
    }
  };

  const handleDashAskSubmit = async () => {
    if (!dashQuestion.trim()) return;
    setDashLoading(true);
    setDashAnswer("");
    try {
      const response = await api.post("/ask", { question: dashQuestion.trim() });
      setDashAnswer(response.data.answer);
    } catch (err) {
      console.error("Dashboard AI ask failed:", err);
      setDashAnswer("AI query failed. Please verify your connection.");
    } finally {
      setDashLoading(false);
    }
  };

  const memoriesCount = timeline.length;
  const decisionsCount = timeline.filter(item => item.decision && item.decision.trim()).length;

  return (
    <>
      <ParticlesBg />

      <div className="flex min-h-screen bg-gradient-to-br from-[#06030d] via-[#0a0718] to-[#04141a] text-white">

        <Sidebar />

        <div className="flex-1 p-10">

          <div className="flex justify-between items-center mb-10">

            <div>
              <p className="text-cyan-400 text-sm tracking-widest uppercase">
                Organizational Memory Operating System
              </p>

              <h1 className="text-6xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Memora AI
              </h1>

              <p className="text-zinc-400 mt-3 max-w-xl">
                Prevent organizational memory loss by capturing decisions,
                meetings, project knowledge and employee expertise.
              </p>
            </div>

            <input
              placeholder="Ask Memora anything..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="w-[420px] bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-full px-6 py-3 outline-none focus:border-cyan-400 transition"
            />
          </div>



          {/* Top Grid */}



          <div className="grid grid-cols-2 gap-8">



            <div className="bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10">



              <div className="flex justify-center">



                <div className="w-72 h-72 rounded-full border-[14px] border-cyan-400 flex items-center justify-center shadow-[0_0_120px_rgba(0,255,255,0.45)] animate-pulse">



                  <div className="text-center">



                    <p className="text-cyan-300 tracking-widest text-sm">

                      MEMORY HEALTH

                    </p>



                    <h2 className="text-7xl font-bold text-purple-400">

                      92%

                    </h2>



                    <p className="text-zinc-400 mt-4">

                      Systems synchronized

                    </p>



                  </div>



                </div>



              </div>



            </div>



            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">
                <p className="text-zinc-400">Memories Stored</p>
                <h2 className="text-5xl font-bold mt-3">{memoriesCount}</h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">
                <p className="text-zinc-400">Decisions Captured</p>
                <h2 className="text-5xl font-bold mt-3">{decisionsCount}</h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">
                <p className="text-zinc-400">Projects</p>
                <h2 className="text-5xl font-bold mt-3">{memoriesCount === 0 ? 0 : Math.max(1, Math.round(memoriesCount * 0.4))}</h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">
                <p className="text-zinc-400">Knowledge Gaps</p>
                <h2 className="text-5xl font-bold text-red-400 mt-3">
                  {timeline.filter(item => item.risks && item.risks.trim()).length}
                </h2>
              </div>

            </div>



          </div>



          {/* Timeline + Insights */}



          <div className="grid grid-cols-2 gap-8 mt-8">



            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6 text-cyan-300">

                Timeline

              </h2>



              <div className="space-y-5">
                {loading ? (
                  <p className="text-zinc-500 animate-pulse">Loading timeline feed...</p>
                ) : timeline.length === 0 ? (
                  <p className="text-zinc-500">No events captured yet.</p>
                ) : (
                  timeline.slice(0, 4).map((item) => {
                    const date = new Date(item.created_at);
                    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    return (
                      <p key={item.id} className="truncate" title={item.title}>
                        <span className="text-cyan-400 font-semibold">{timeStr}</span> — {item.title}
                      </p>
                    );
                  })
                )}
              </div>

            </div>



            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6 text-purple-300">

                AI Insights

              </h2>



              <div className="space-y-4">

                <div className="bg-purple-500/10 p-4 rounded-xl">

                  ✓ Capture knowledge from departing engineer

                </div>



                <div className="bg-cyan-500/10 p-4 rounded-xl">

                  ✓ Consolidate duplicate onboarding documents

                </div>



                <div className="bg-red-500/10 p-4 rounded-xl">

                  ⚠ Infrastructure knowledge gap detected

                </div>

              </div>

            </div>



          </div>



          {/* Knowledge Gaps */}



          <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-red-400 mb-6">

              Knowledge Gap Alerts

            </h2>



            <div className="grid grid-cols-3 gap-6">



              <div className="bg-black/20 rounded-2xl p-5">

                Missing Incident Runbook

              </div>



              <div className="bg-black/20 rounded-2xl p-5">

                Vendor Contract Knowledge

              </div>



              <div className="bg-black/20 rounded-2xl p-5">

                Missing Design Rationale

              </div>



            </div>

          </div>



          {/* Decision Graph */}



         <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-3xl p-8">

  <h2 className="text-3xl font-bold text-purple-300 mb-4">
    Organizational Knowledge Graph
  </h2>

  <BrainMap />

</div>



<div className="mt-8 flex gap-8 item-start">

  {/* AI Processing Status */}
  <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-3xl p-8 min-h-[320px]">

    <h2 className="text-3xl font-bold text-cyan-300 mb-6">
      AI Processing Status
    </h2>

    <div className="space-y-5">

      <div className="flex justify-between">
        <span>Meeting Analysis</span>
        <span className="text-green-400">✓ Completed</span>
      </div>

      <div className="flex justify-between">
        <span>Knowledge Extraction</span>
        <span className="text-green-400">✓ Completed</span>
      </div>

      <div className="flex justify-between">
        <span>Risk Detection</span>
        <span className="text-yellow-400">Processing</span>
      </div>

      <div className="flex justify-between">
        <span>Decision Linking</span>
        <span className="text-green-400">✓ Completed</span>
      </div>

      <div className="flex justify-between">
        <span>Memory Gap Prediction</span>
        <span className="text-green-400">✓ Completed</span>
      </div>

    </div>

  </div>

  {/* Memory Loss Prediction */}
  <div className="flex-1 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-red-500/20 min-h-[320px]">

    <h2 className="text-3xl font-bold text-red-400 mb-6">
      Memory Loss Prediction
    </h2>

    <div className="space-y-4">

      <div className="text-2xl font-bold">
        DevOps Knowledge Concentration Risk
      </div>

      <div>
        Risk Score:
        <span className="text-red-400 font-bold ml-2">87%</span>
      </div>

      <div>
        92% deployment knowledge belongs to one engineer.
      </div>

      <div>
        Predicted Impact:
        Delayed deployments and onboarding failures.
      </div>

      <div className="text-cyan-400">
        Recommended Action:
        Capture critical deployment knowledge immediately.
      </div>

    </div>

  </div>

  {/* AI Agent Activity */}
  <div className="flex-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 min-h-[320px]">

    <h2 className="text-3xl font-bold mb-6">
      AI Agent Activity
    </h2>

    <div className="space-y-4">

      <div>🧠 Extracted 14 decisions from leadership meetings</div>

      <div>📄 Indexed onboarding documents</div>

      <div>⚠ Detected employee dependency risk</div>

      <div>🔗 Linked pricing decision to churn analysis</div>

      <div>🧩 Connected onboarding playbook to project memory</div>

    </div>

  </div>

</div>

          <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              Ask Memora
            </h2>

            <div className="flex gap-4 mb-6">
              <input
                type="text"
                value={dashQuestion}
                onChange={(e) => setDashQuestion(e.target.value)}
                placeholder="Ask a question about meeting records..."
                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleDashAskSubmit();
                }}
              />
              <button
                onClick={handleDashAskSubmit}
                disabled={dashLoading}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition disabled:opacity-50"
              >
                {dashLoading ? "Querying..." : "Send"}
              </button>
            </div>

            {dashAnswer && (
              <div className="bg-black/30 rounded-2xl p-6 border border-white/5 whitespace-pre-wrap leading-relaxed text-zinc-300">
                {dashAnswer}
              </div>
            )}

          </div>



        </div>



      </div>

    </>

  );

}

export default Dashboard;
