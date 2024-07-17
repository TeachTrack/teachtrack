import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardLayout from "./layout/dashboard-layout/dashboard-layout";
import NotPage from "./pages/login/NotPage";
import NotAcess from "./pages/login/NotAcess";
import ServerEror from "./pages/login/ServerEror";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="*" element={<NotPage />} />
          <Route path="/403" element={<NotAcess />}/>
          <Route path="/500" element={<ServerEror />}/>
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
