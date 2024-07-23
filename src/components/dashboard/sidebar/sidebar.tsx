import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocaleContext } from "../../../context/locale.context.tsx";

const Sidebar = () => {
  const { t } = useLocaleContext();
  return (
    <div className="bg-white pt-24  w-[300px] h-[100vh] overflow-y-scroll">
      <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
        <p className="p-4 font-medium text-gray300 mt-8">
          <span className="z-40 bg-white ml-4 ">{t("sidebar.school")}</span>
          <hr className="-z-40" />
        </p>

        <Menu.Item key="15">
          <Link to="schools_list">-{t("sidebar.schools_list")}</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
