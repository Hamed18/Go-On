import logo from '../../src/assets/logo.jpg';
import userdefaultPic from '../../src/assets/user.png';
import Icon from '../../src/assets/logo.jpg';
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import LoginMenu from '@/components/menu/LoginMenu';
import { ThemeContext } from '../Provider/ThemeProvider'; // keep this import if you use a provider

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState(false);

  // Safe-context read: don't destructure directly from potentially undefined context
  const themeContext = useContext(ThemeContext);

  // If ThemeContext is available, use it. Otherwise fall back to local management.
  const hasContext = !!themeContext && (typeof themeContext.theme !== 'undefined');

  // local fallback state (only used when no provider)
  const [localTheme, setLocalTheme] = useState(() => {
    // initial: try localStorage, then document element class, then light
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) {}
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  // Decide which values to use
  const theme = hasContext ? themeContext.theme : localTheme;
  const toggleTheme = hasContext
    ? themeContext.toggleTheme
    : () => {
        // fallback toggle: toggle html 'dark' class and persist
        const next = theme === 'dark' ? 'light' : 'dark';
        setLocalTheme(next);
        try {
          if (next === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', next);
        } catch (e) {
          // ignore (server side or restricted storage)
        }
      };

  // Keep document class in sync when using local fallback (for initial render or updates)
  useEffect(() => {
    if (hasContext) return; // provider owns state; don't override
    try {
      if (localTheme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (e) {}
  }, [localTheme, hasContext]);

  const navItems = [
    { to: "/", label: "Home", show: true },
    { to: "/events", label: "Events", show: true },
    { to: "/blog", label: "Blog", show: true },
    { to: "/contact", label: "Contact", show: true },
 /* { to: "/enroll", label: "Enroll", show: true },  */
    { to: "/login", label: "Login", show: !user },
  ];

  return (
    <nav
      className={`shadow-xl py-2 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10 md:w-14 md:h-14" />
            <h2 className="flex flex-col justify-center uppercase">
              <span className="font-bold text-xl md:text-3xl">Go On</span>
              <span className="-mt-1 font-normal text-xs md:text-sm tracking-widest">
                Upgrade your Gaming
              </span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems
              .filter((item) => item.show)
              .map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md font-medium ${
                      isActive
                        ? theme === "dark"
                          ? "border-2 border-white"
                          : "border-2 border-black"
                        : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

            {/* Theme Toggle Button */}
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="hidden"
                aria-label="Toggle theme"
              />

              {/* Sun Icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,1,0,1.41,1.41l.71-.71A1,1,0,0,0,5.64,17ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
              </svg>

              {/* Moon Icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14A8.05,8.05,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
              </svg>
            </label>

            {user && <LoginMenu />}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle in Mobile */}
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="hidden"
                aria-label="Toggle theme"
              />
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,1,0,1.41,1.41l.71-.71A1,1,0,0,0,5.64,17ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
              </svg>
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14A8.05,8.05,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
              </svg>
            </label>

            {/* Mobile Menu Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={`w-[300px] sm:w-[400px] ${
                  theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
                }`}
              >
                <div className="flex flex-col space-y-3 mt-10 px-5">
                  {navItems
                    .filter((item) => item.show)
                    .map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md text-base font-medium ${
                            isActive
                              ? theme === "dark"
                                ? "border-2 border-white"
                                : "border-2 border-black"
                              : theme === "dark"
                              ? "text-gray-300 hover:bg-gray-800"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  {user && <LoginMenu />}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
