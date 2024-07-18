import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle="Uzr, siz qidirayotgan sahifani topa olmadik. yana bir bor qayta urinib ko'rasizmi?"
        extra={
          <Button onClick={() => navigate(-1)} type="primary">
            Ortga qaytish
          </Button>
        }
      />
    </div>
  );
};
