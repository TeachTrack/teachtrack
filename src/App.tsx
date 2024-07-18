import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardLayout from "./layout/dashboard-layout/dashboard-layout";

const App = () => {
  //User get me togirlangandan keyin user orqali tekshiriladi token orqali emas
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <p>content of layout</p>
              </DashboardLayout>
            ) : (
              <LoginPage />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
