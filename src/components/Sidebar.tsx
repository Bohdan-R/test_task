import { NavLink, useLocation } from "react-router-dom";
import { ERoutePath, Link } from "../types";

const links: Link[] = [
  { label: "Overview", href: ERoutePath.OVERVIEW },
  { label: "Users", href: ERoutePath.USERS },
  { label: "Settings", href: ERoutePath.SETTINGS },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  console.log("location ", location);
  return (
    <aside className="w-[160px] bg-[#0a0e1a] px-2 py-10 border-r-2 border-r-slate-800">
      <nav className="space-y-2">
        {links.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <NavLink
              key={href}
              to={href}
              className={`block rounded-lg px-4 py-2 transition-colors ${
                isActive
                  ? "bg-[#212e49] text-white"
                  : "bg-[#121825] text-slate-300 hover:bg-[#212e49]"
              }`}
            >
              {label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
export default Sidebar;
