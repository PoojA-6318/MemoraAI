import Sidebar from "../components/Sidebar";

import ParticlesBg from "../components/ParticlesBg";

import BrainMap from "../components/BrainMap";

//import ParticlesBg from "../components/ParticlesBg";

function Dashboard() {

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

              className="w-[420px] bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-full px-6 py-3 outline-none"

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

                <h2 className="text-5xl font-bold mt-3">48,192</h2>

              </div>



              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">

                <p className="text-zinc-400">Decisions Captured</p>

                <h2 className="text-5xl font-bold mt-3">2,847</h2>

              </div>



              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">

                <p className="text-zinc-400">Projects</p>

                <h2 className="text-5xl font-bold mt-3">37</h2>

              </div>



              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">

                <p className="text-zinc-400">Knowledge Gaps</p>

                <h2 className="text-5xl font-bold text-red-400 mt-3">3</h2>

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

                <p>09:12 AM — Pricing Strategy Approved</p>

                <p>11:43 AM — Onboarding Playbook Added</p>

                <p>Yesterday — Customer Churn Analysis Generated</p>

                <p>2 Days Ago — Migration Knowledge Captured</p>

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

          {/* Ask Memora */}



          <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-3xl p-8">



            <h2 className="text-3xl font-bold text-cyan-300 mb-6">

              Ask Memora

            </h2>



            <div className="bg-purple-500/10 rounded-2xl p-4 mb-4 w-fit ml-auto">

              Why did we move away from flat enterprise pricing?

            </div>



            <div className="bg-black/30 rounded-2xl p-6">

              Three linked memories indicate the decision followed

              Q3 churn analysis and executive approval.

            </div>



          </div>



        </div>



      </div>

    </>

  );

}

export default Dashboard;
