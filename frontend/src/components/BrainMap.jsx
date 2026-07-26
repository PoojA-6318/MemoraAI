function BrainMap() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden">

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full">
        <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#67e8f9" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="#67e8f9" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#67e8f9" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#67e8f9" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#67e8f9" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#67e8f9" strokeWidth="2" />
      </svg>

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      w-48 h-48 rounded-full
      bg-gradient-to-r from-cyan-500/20 to-purple-500/20
      border border-cyan-400
      flex items-center justify-center
      text-2xl font-bold
      shadow-[0_0_100px_rgba(34,211,238,0.35)]">

        MEMORA
      </div>

      {/* Nodes */}

      <div className="absolute top-10 left-44 bg-purple-500/10 border border-purple-500/30 px-5 py-3 rounded-xl">
        Executive Meeting
      </div>

      <div className="absolute top-10 right-44 bg-green-500/10 border border-green-500/30 px-5 py-3 rounded-xl">
        Pricing Decision
      </div>

      <div className="absolute left-16 top-[42%] bg-cyan-500/10 border border-cyan-500/30 px-5 py-3 rounded-xl">
        Customer Research
      </div>

      <div className="absolute right-16 top-[42%] bg-yellow-500/10 border border-yellow-500/30 px-5 py-3 rounded-xl">
        Churn Analysis
      </div>

      <div className="absolute bottom-10 left-44 bg-red-500/10 border border-red-500/30 px-5 py-3 rounded-xl">
        Knowledge Risk
      </div>

      <div className="absolute bottom-10 right-44 bg-pink-500/10 border border-pink-500/30 px-5 py-3 rounded-xl">
        Product Strategy
      </div>

    </div>
  );
}

export default BrainMap;