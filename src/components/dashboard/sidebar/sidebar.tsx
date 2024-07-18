import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocaleContext } from "../../../context/locale.context.tsx";

const Sidebar = () => {
  const { t } = useLocaleContext();
  return (
    <div className="bg-white pt-24  w-[300px] h-[100vh] overflow-y-scroll">
      <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
        <p className="p-4 font-medium text-gray300 mt-8">
          <span className="z-40 bg-white ml-4 ">{t("sidebar.staff")}</span>
          <hr className="-z-40" />
        </p>

        <Menu.Item key="15">
          <Link to="/teachers">-{t("sidebar.teachers_list")}</Link>
        </Menu.Item>
        <Menu.Item key="16">
          <Link to="/students">-{t("sidebar.students_list")}</Link>
        </Menu.Item>
        <Menu.Item key="17">
          <Link to="/complains">-{t("sidebar.complains")}</Link>
        </Menu.Item>
        <Menu.Item key="18">
          <Link to="/courses">-{t("sidebar.courses")}</Link>
        </Menu.Item>
        <Menu.Item key="19">
          <Link to="/transactions">-{t("sidebar.transactions")}</Link>
        </Menu.Item>
        <Menu.Item key="20">
          <Link to="/contracts">-{t("sidebar.contracts")}</Link>
        </Menu.Item>
        <Menu.Item key="21">
          <Link to="/notifications">-{t("sidebar.notifications")}</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
