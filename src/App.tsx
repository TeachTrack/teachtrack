import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardLayout from "./layout/dashboard-layout/dashboard-layout";
import PrivateRoute from "./utils/routes/private-routes";
import { AccessDenied } from "./pages/login/access-denied";
import { UserRoles } from "./utils/enums/enums";

const App = () => {
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute roles={[UserRoles.ADMIN]}>
              <DashboardLayout>
                <p>content of layout</p>
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/not-access" element={<AccessDenied />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
