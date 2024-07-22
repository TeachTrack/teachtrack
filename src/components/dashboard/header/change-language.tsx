import React, { useCallback } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ZhihuOutlined } from "@ant-design/icons";
import UzbFlag from "./../../../../public/uzb.svg";
import RusFlag from "./../../../../public/rus.svg";
import { useLocaleContext } from "../../../context/locale.context";

export const ChangeLanguage: React.FC = () => {
  const { t, setLang } = useLocaleContext();

  const changeLanguage = useCallback(
    (language: string) => {
      setLang(language);
    },
    [setLang],
  );

  const items: MenuProps["items"] = [
    {
      label: (
        <Space>
          <img src={UzbFlag} alt="Uzb" width={30} height={20} />
          O'zbek
        </Space>
      ),
      key: "0",
      onClick: () => changeLanguage("uz"),
    },
    {
      label: (
        <Space>
          <img src={RusFlag} alt="Rus" width={30} height={20} />
          Русский
        </Space>
      ),
      key: "1",
      onClick: () => changeLanguage("ru"),
    },
    {
      type: "divider",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <ZhihuOutlined />
          {t("common.change_language")}
        </Space>
      </a>
    </Dropdown>
  );
};
