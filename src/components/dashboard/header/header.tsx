import { Avatar, Button } from "antd";
import { HiOutlineLogin } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { ChangeLanguage } from "./change-language";
import { useLocaleContext } from "../../../context/locale.context";

const Header = () => {
  const { t } = useLocaleContext();

  return (
    <div className="bg-white fixed px-8 py-6 h-20 flex text-black  w-full shadow-md justify-between items-center z-50">
      <p className="text-2xl font-playwrite mb-4">TeachTrack</p>
      <div className="flex gap-4 items-center">
        <span className="text-2xl cursor-pointer ">
          <IoNotificationsOutline />
        </span>
        <div className="flex gap-2 items-center">
          <Avatar />
          <div>
            <p className="text-sm font-medium">Otabek O'ktamov</p>
            <p className="text-xs">{t("common.admin")}</p>
          </div>
          <Button className="ml-8 font-medium" size="large">
            <HiOutlineLogin className="text-2xl " /> {t("common.log_out")}
          </Button>
          <ChangeLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
