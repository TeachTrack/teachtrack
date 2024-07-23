import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardLayout from "./layout/dashboard-layout/dashboard-layout";
import { useGetUser } from "./react-query/hooks/hooks";
import GlobalLoader from "./components/global-loader/global-loader";
import { AccessDenied } from "./pages/access-denied/access-denied";
import PrivateRoute from "./utils/routes/private-routes";
import { UserRoles } from "./utils/enums/enums";
import Schools from "./pages/schools";

const App = () => {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) {
    return <GlobalLoader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <PrivateRoute roles={[UserRoles.SUPER_ADMIN, UserRoles.ADMIN]}>
                <Routes>
                  <Route path="schools_list" element={<Schools />} />
                </Routes>
              </PrivateRoute>
            </DashboardLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/not-access" element={<AccessDenied />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
