import { Navigate } from "react-router-dom";
import LoginForm from "../../components/auth/login-form/login-form";
import AuthLayout from "../../layout/auth-layout/auth-layout";
import { useGetUser } from "../../react-query/hooks/hooks";

const LoginPage = () => {
  const { data: user } = useGetUser();

  if (user) {
    return <Navigate to="dashboard" />;
  }
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
