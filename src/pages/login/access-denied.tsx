import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useLocaleContext } from "../../context/locale.context";
export const AccessDenied = () => {
  const navigate = useNavigate();
  const { t } = useLocaleContext();
  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <Result
        status="403"
        title="403"
        subTitle={t("error_pages.access_denied_message")}
        extra={
          <Button onClick={() => navigate(-1)} type="primary">
            {t("common.go_back")}
          </Button>
        }
      />
    </div>
  );
};
