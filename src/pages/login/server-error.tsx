import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useLocaleContext } from "../../context/locale.context";

export const ServerError = () => {
  const navigate = useNavigate();
  const { t } = useLocaleContext();

  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <Result
        status="500"
        title="500"
        subTitle={t("error_pages.server_error_message")}
        extra={
          <Button onClick={() => navigate(-1)} type="primary">
            {t("common.go_back")}
          </Button>
        }
      />
    </div>
  );
};
