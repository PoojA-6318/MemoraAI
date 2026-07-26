import { useState } from "react";
import Sidebar from "../components/Sidebar";

function CaptureMemory() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#03060f] via-[#07112d] to-[#020714] text-white">

      <Sidebar />

      <div className="flex-1 p-12">

        <h1 className="text-6xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Capture Organizational Memory
        </h1>

        <div className="bg-white/5 rounded-3xl p-10">

          <input
            type="file"
            onChange={() => setUploaded(true)}
            className="mb-6"
          />

          {uploaded && (
            <div className="space-y-4">

              <div className="bg-cyan-500/10 p-4 rounded-xl">
                ✓ Decision Detected: Pricing Revision Approved
              </div>

              <div className="bg-purple-500/10 p-4 rounded-xl">
                ✓ Stakeholders: CEO, Finance Team
              </div>

              <div className="bg-red-500/10 p-4 rounded-xl">
                ⚠ Risk: Rollback Plan Missing
              </div>

            </div>
          )}

          <div className="mt-8 grid grid-cols-3 gap-4">

  <div className="bg-cyan-500/10 p-4 rounded-xl">
    📄 Meeting Transcript
  </div>

  <div className="bg-purple-500/10 p-4 rounded-xl">
    🧠 Decision Extraction
  </div>

  <div className="bg-red-500/10 p-4 rounded-xl">
    ⚠ Risk Detection
  </div>

</div>

        </div>

      </div>

    </div>
  );
}

export default CaptureMemory;