import { Avatar, Button } from "antd";
import { HiOutlineLogin } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { ChangeLanguage } from "./change-language";
import { useLocaleContext } from "../../../context/locale.context";
import { useGetUser } from "../../../react-query/hooks/hooks";
import LogOutConfirmation from "../log-out-confirmation/log-out-confirmation";
import { useState } from "react";

const Header = () => {
  const { t } = useLocaleContext();
  const { data: user } = useGetUser();
  const [isOpen, setIsOpen] = useState(false);

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
            <p className="text-sm font-medium">{user?.fullName}</p>
            <p className="text-xs">{user?.role}</p>
          </div>
          <Button onClick={setIsOpen.bind(null, true)} className="ml-8 font-medium" size="large">
            <HiOutlineLogin className="text-2xl " /> {t("common.log_out")}
          </Button>
          <Button className="ml-1 font-medium" size="large">
            <ChangeLanguage />
          </Button>
        </div>
      </div>
      <LogOutConfirmation isOpen={isOpen} onCancel={setIsOpen.bind(null, false)} />
    </div>
  );
};

export default Header;
