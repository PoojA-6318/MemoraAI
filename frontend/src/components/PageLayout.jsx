import Sidebar from "./Sidebar";

function PageLayout({ title, children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0B1020] via-[#0E1528] to-[#08111F] text-white">

      <Sidebar />

      <div className="flex-1 p-10 overflow-auto">

        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
          {title}
        </h1>

        {children}

      </div>

    </div>
  );
}

export default PageLayout;