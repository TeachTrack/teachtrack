import { ReactNode } from "react";
import Header from "../../components/dashboard/header/header";
import Sidebar from "../../components/dashboard/sidebar/sidebar";

interface IDashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  return (
    <div className="bg-gray200 h-screen">
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
