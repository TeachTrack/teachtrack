import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardLayout from "./layout/dashboard-layout/dashboard-layout";
import ServerError from "./pages/login/ServerError";
import AccessDenied from "./pages/login/AccessDenied";
import NotFound from "./pages/login/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/403" element={<AccessDenied />} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/500" element={<ServerError />}/>
          <Route
            path="/dashboard/*" element={
              <DashboardLayout>
                <p>content of layout</p>
              </DashboardLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
