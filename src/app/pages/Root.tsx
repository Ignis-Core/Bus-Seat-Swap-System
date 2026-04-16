import { Outlet, useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { User, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Buy Ticket", path: "/home/buy" },
    { label: "Sell Ticket", path: "/home/sell" },
    { label: "My Activity", path: "/home/activity" },
    { label: "About", path: "/home/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/home") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black text-white"
            >
              Safar<span className="text-[#FFD600]">Swap</span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`relative py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-[#FFD600]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFD600]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/home/profile")}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">Profile</span>
              </button>
              <button
                onClick={() => navigate("/auth")}
                className="hidden md:flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white p-2"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-2 space-y-2"
            >
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-[#FFD600] text-black"
                      : "text-white/70 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate("/home/profile");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-lg text-white/70 hover:bg-white/10"
              >
                Profile
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}
