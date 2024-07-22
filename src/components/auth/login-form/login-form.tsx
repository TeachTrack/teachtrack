import { Button, Form, Input } from "antd";
import { useLocaleContext } from "../../../context/locale.context.tsx";
import { useLogin } from "../../../react-query/hooks/hooks.ts";

const LoginForm = () => {
  const { t } = useLocaleContext();
  const { mutate, isPending, isError } = useLogin();

  return (
    <div className="bg-white shadow-lg rounded w-96 overflow-hidden">
      <p className="p-6 bg-gray200 text-gray400 font-bold text-md">{t("login.login_to_crm")}</p>
      {isError && <p className="text-sm p-6 text-[red]">Back-endchi error messagelarni togirlab berguncha shu error chiqadi</p>}
      <div className="bg-white p-6">
        <Form size="large" layout="vertical" onFinish={mutate}>
          <Form.Item
            name="phoneNumber"
            label={<p className="text-gray300 font-bold">{t("login.phone_number")}</p>}
            rules={[{ required: true, message: t("login.phone_number_required") as string }]}
          >
            <Input className="h-12" placeholder={t("login.phone_number") as string} />
          </Form.Item>
          <Form.Item
            name="password"
            label={<p className="text-gray300 font-bold">{t("login.password")}</p>}
            rules={[{ required: true, message: t("login.password_required") as string }]}
          >
            <Input.Password className="h-12" placeholder={t("login.password") as string} />
          </Form.Item>
          <Button loading={isPending} className="h-12 w-full font-bold" type="primary" htmlType="submit">
            {t("login.login")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
