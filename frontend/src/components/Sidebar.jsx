import {
  LayoutDashboard,
  Clock3,
  Brain,
  AlertTriangle,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-24 min-h-screen flex flex-col items-center py-10 border-r border-white/10 bg-black/20 backdrop-blur-xl">

      <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center mb-16 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
        <Brain />
      </div>

      <div className="flex flex-col gap-8 text-zinc-400">

        <Link to="/dashboard">
          <LayoutDashboard className="hover:text-cyan-400 cursor-pointer transition-all" />
        </Link>

        <Link to="/timeline">
          <Clock3 className="hover:text-cyan-400 cursor-pointer transition-all" />
        </Link>

        <Link to="/capture">
          <Brain className="hover:text-cyan-400 cursor-pointer transition-all" />
        </Link>

        <Link to="/alerts">
          <AlertTriangle className="hover:text-red-400 cursor-pointer transition-all" />
        </Link>

        <Link to="/chat">
          <Settings className="hover:text-cyan-400 cursor-pointer transition-all" />
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;