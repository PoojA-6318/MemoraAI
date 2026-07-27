import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import api from "../services/api";

function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const response = await api.get("/timeline");
        setTimeline(response.data);
      } catch (err) {
        console.error("Error fetching timeline:", err);
        setError("Failed to load timeline records.");
      } finally {
        setLoading(false);
      }
    };
    fetchTimeline();
  }, []);

  return (
    <PageLayout title="Memory Evolution Timeline">
      {loading && (
        <div className="text-cyan-400 text-lg animate-pulse">
          Loading Memora timeline...
        </div>
      )}

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-xl">
          {error}
        </div>
      )}

      {!loading && !error && timeline.length === 0 && (
        <div className="text-zinc-400 text-center py-10 bg-white/5 rounded-3xl">
          No memories captured yet. Go to the Capture page to upload your first meeting transcript!
        </div>
      )}

      <div className="space-y-6">
        {!loading &&
          !error &&
          timeline.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-300">
                    {item.title}
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">
                    Captured on: {new Date(item.created_at).toLocaleString()}
                  </p>
                </div>
              </div>

              {item.summary && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                    Summary
                  </h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              )}

              {item.decision && (
                <div className="mb-4 bg-green-500/5 border border-green-500/20 p-4 rounded-2xl">
                  <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">
                    Key Decision
                  </h4>
                  <p className="text-zinc-200 text-sm font-medium">
                    {item.decision}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {item.tasks && item.tasks.trim() && (
                  <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-2xl">
                    <h4 className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-2">
                      Action Items
                    </h4>
                    <ul className="list-disc pl-5 text-zinc-300 text-sm space-y-1">
                      {item.tasks.split("\n").map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.risks && item.risks.trim() && (
                  <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-2xl">
                    <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                      Identified Risks
                    </h4>
                    <ul className="list-disc pl-5 text-zinc-300 text-sm space-y-1">
                      {item.risks.split("\n").map((risk, idx) => (
                        <li key={idx}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export default Timeline;