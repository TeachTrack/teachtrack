import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

interface IProps {
  isOpen: boolean;
  onCancel: () => void;
}

const LogOutConfirmation = ({ isOpen, onCancel }: IProps) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <Modal open={isOpen} onCancel={onCancel} footer={null}>
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="text-center">
          <h3 className="text-xl font-bold">Confirm Log Out</h3>
          <p className="text-muted-foreground">Are you sure you want to log out?</p>
        </div>
        <div className="flex w-full gap-2">
          <Button size="large" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
          <Button size="large" onClick={handleLogOut} type="text" className="flex-1 bg-red600 text-white hover:bg-red400 !imp">
            Log Out
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutConfirmation;
