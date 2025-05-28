import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 py-10 px-6 lg:px-16 xl:px-32">{children}</main>
    </div>
  );
}
