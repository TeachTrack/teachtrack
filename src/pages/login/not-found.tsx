import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useLocaleContext } from "../../context/locale.context";
export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useLocaleContext();
  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle={t("error_pages.not_found_message")}
        extra={
          <Button onClick={() => navigate(-1)} type="primary">
            {t("common.go_back")}
          </Button>
        }
      />
    </div>
  );
};
