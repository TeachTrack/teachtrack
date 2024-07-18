import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export const ServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <Result
        status="500"
        title="500"
        subTitle="Hozircha, Server xavfsizligini ta'minlash va barcha himoya choralari olib borilmoqda"
        extra={
          <Button onClick={() => navigate(-1)} type="primary">
            Ortga qaytish
          </Button>
        }
      />
    </div>
  );
};
