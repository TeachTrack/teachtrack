import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Flex, Space } from "antd";
import { ZhihuOutlined } from "@ant-design/icons";
import UzbFlag from "./../../../../public/uzb.svg";
import RusFlag from "./../../../../public/rus.svg";
import { useLocaleContext } from "../../../context/locale.context";

const items: MenuProps["items"] = [
  {
    label: (
      <Flex gap="middle">
        <img src={UzbFlag} alt="Uzb" width={30} height={20} />
        O'zbek
      </Flex>
    ),
    key: "0",
    onClick: () => changeLanguage("uz"),
  },
  {
    label: (
      <Flex gap="middle">
        <img src={RusFlag} alt="Rus" width={30} height={20} />
        Русский
      </Flex>
    ),
    key: "1",
    onClick: () => changeLanguage("ru"),
  },
  {
    type: "divider",
  },
];

const changeLanguage = (language: string) => {
  localStorage.setItem("language", language); // Tilni localStorage ga saqlash
  window.location.reload();
  console.log(`Language changed to: ${language}`);
};

export const ChangeLanguage: React.FC = () => {
  const { t } = useLocaleContext();

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
