import { Menu } from "antd";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white pt-24  w-[300px] h-[100vh] overflow-y-scroll">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <p className="p-4 font-medium text-gray300 mt-8">
          <span className="z-40 bg-white ml-4 ">Hodim</span>
          <hr className="-z-40" />
        </p>

        <Menu.Item key="15">
          <Link to="/teachers">-O'qtuvchilar royhati</Link>
        </Menu.Item>
        <Menu.Item key="16">
          <Link to="/students">-Oquvchilar royhati</Link>
        </Menu.Item>
        <Menu.Item key="17">
          <Link to="/problems">-Shikoyatlar</Link>
        </Menu.Item>
        <Menu.Item key="18">
          <Link to="/courses">-Kurslar</Link>
        </Menu.Item>
        <Menu.Item key="19">
          <Link to="/transactions">-To'lovlar</Link>
        </Menu.Item>
        <Menu.Item key="20">
          <Link to="/contracts">-Shartnomalar</Link>
        </Menu.Item>
        <Menu.Item key="21">
          <Link to="/notifications">-Habarlar</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
