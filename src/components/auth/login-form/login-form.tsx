import { Button, Form, Input } from "antd";
import { useLocaleContext } from "../../../context/locale.context.tsx";

const LoginForm = () => {
  const { t } = useLocaleContext();
  return (
    <div className="bg-white shadow-lg rounded w-96 overflow-hidden">
      <p className="p-6 bg-gray200  text-gray400 font-bold text-md ">{t("login.login_to_crm")}</p>
      <div className="bg-white p-6">
        <Form size="large" layout="vertical">
          <Form.Item label={<p className="text-gray300 font-bold">{t("login.phone_number")}</p>}>
            <Input className="h-12" placeholder={t("login.phone_number") as string} />
          </Form.Item>
          <Form.Item label={<p className="text-gray300 font-bold">{t("login.password")}</p>}>
            <Input.Password className="h-12" placeholder={t("login.phone_number") as string} />
          </Form.Item>
          <Button className="h-12 w-full font-bold" type="primary">
            {t("login.login")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
