import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function DashboardLayout() {
  const link = [
    {
      label: "Top up",
      href: "topup",
    },
    {
      label: "Transaction",
      href: "transaction",
    },
    {
      label: "Akun",
      href: "account",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-slate-300 bg-white sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <NavLink
            className="flex items-center space-x-3"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-lg md:text-xl font-semibold">SIMS PPOB</p>
          </NavLink>
          <div className="hidden md:flex space-x-8 lg:space-x-10 text-base lg:text-lg font-medium">
            {link.map((item, index) => (
              <NavLink
                to={item.href}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-bold border-b-2 border-red-500 pb-1"
                    : "text-gray-900 hover:text-red-500 transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 animate-fadeIn">
            <div className="flex flex-col space-y-4 px-5 py-6">
              {link.map((item, index) => (
                <NavLink
                  to={item.href}
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-bold text-lg"
                      : "text-gray-900 text-lg"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}
