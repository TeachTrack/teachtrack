import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
export const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button onClick={() => navigate(-1)} type="primary">
          Ortga qaytish
        </Button>
      }
    />
    </div>
  );
};
