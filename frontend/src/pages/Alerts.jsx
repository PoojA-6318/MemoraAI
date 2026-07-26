import Sidebar from "../components/Sidebar";

function Alerts() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#03060f] via-[#07112d] to-[#020714] text-white">

      <Sidebar />

      <div className="flex-1 p-12">

        <h1 className="text-6xl font-bold mb-10 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
  Knowledge Risk Center
</h1>

{/* Risk Cards */}
<div className="grid grid-cols-3 gap-8">

  <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8">
    <h3 className="text-red-400 mb-4">CRITICAL</h3>
    <h2 className="text-3xl font-bold mb-4">
      Incident Recovery Missing
    </h2>
    <p>No disaster recovery workflow documented.</p>
  </div>

  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-3xl p-8">
    <h3 className="text-yellow-400 mb-4">MEDIUM</h3>
    <h2 className="text-3xl font-bold mb-4">
      Vendor Knowledge Fragmented
    </h2>
    <p>Knowledge spread across 8 disconnected documents.</p>
  </div>

  <div className="bg-purple-500/10 border border-purple-500/30 rounded-3xl p-8">
    <h3 className="text-purple-400 mb-4">HIGH</h3>
    <h2 className="text-3xl font-bold mb-4">
      Employee Dependency Risk
    </h2>
    <p>92% deployment knowledge belongs to one engineer.</p>
  </div>

</div>

{/* Bottom Section */}
<div className="grid grid-cols-2 gap-8 mt-8">

  <div className="bg-white/5 rounded-3xl p-8">

    <h2 className="text-3xl font-bold text-cyan-300 mb-6">
      Organizational Risk Summary
    </h2>

    <div className="grid grid-cols-4 gap-4">

      <div className="bg-red-500/10 rounded-2xl p-5">
        <p>Critical</p>
        <h2 className="text-4xl font-bold mt-2">1</h2>
      </div>

      <div className="bg-purple-500/10 rounded-2xl p-5">
        <p>High</p>
        <h2 className="text-4xl font-bold mt-2">2</h2>
      </div>

      <div className="bg-yellow-500/10 rounded-2xl p-5">
        <p>Medium</p>
        <h2 className="text-4xl font-bold mt-2">1</h2>
      </div>

      <div className="bg-cyan-500/10 rounded-2xl p-5">
        <p>Score</p>
        <h2 className="text-4xl font-bold mt-2">74</h2>
      </div>

    </div>

  </div>

  <div className="bg-white/5 rounded-3xl p-8">

    <h2 className="text-3xl font-bold text-cyan-300 mb-6">
      Vulnerable Knowledge Areas
    </h2>

    <div className="space-y-5">

      <div className="flex justify-between">
        <span>DevOps Infrastructure</span>
        <span className="text-red-400">92% Single Owner</span>
      </div>

      <div className="flex justify-between">
        <span>Vendor Contracts</span>
        <span className="text-yellow-400">Fragmented</span>
      </div>

      <div className="flex justify-between">
        <span>Disaster Recovery</span>
        <span className="text-red-400">Missing</span>
      </div>

      <div className="flex justify-between">
        <span>Customer Research</span>
        <span className="text-green-400">Healthy</span>
      </div>

    </div>

  </div>

</div>

</div>

</div>

  );
}

export default Alerts;