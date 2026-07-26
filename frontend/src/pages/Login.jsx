import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#03060f] via-[#07112d] to-[#020714] text-white">

      <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl w-[450px] border border-cyan-500/20">

        <h1 className="text-5xl font-bold mb-3 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Memora AI
        </h1>

        <p className="text-center text-zinc-400 mb-8">
          Organizational Memory Operating System
        </p>

        <input
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-xl bg-black/40 outline-none"
        />

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-black/40 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4"
          >
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
          </button>

        </div>

        <Link to="/dashboard">

          <button className="w-full mt-6 bg-cyan-500 text-black py-3 rounded-xl font-bold">
            Enter Memory OS
          </button>

        </Link>

      </div>

    </div>
  );
}

export default Login;