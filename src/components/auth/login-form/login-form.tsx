import { Button, Form, Input } from "antd";

const LoginForm = () => {
  return (
    <div className="bg-white shadow-lg rounded w-96 overflow-hidden">
      <p className="p-6 bg-gray200  text-gray400 font-bold text-md ">
        Boshqaruv Paneliga Kirish
      </p>
      <div className="bg-white p-6">
        <Form size="large" layout="vertical">
          <Form.Item
            label={<p className="text-gray300 font-bold">Telefon raqamingiz</p>}
          >
            <Input className="h-12" placeholder="Telfon Raqam" />
          </Form.Item>
          <Form.Item label={<p className="text-gray300 font-bold">Parol</p>}>
            <Input.Password className="h-12" placeholder="Parol" />
          </Form.Item>
          <Button className="h-12 w-full font-bold" type="primary">
            Kirish
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
