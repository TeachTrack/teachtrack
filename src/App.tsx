import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardLayout from "./layout/dashboard-layout/dashboard-layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route
            path="/dashboard/*"
            element={
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
