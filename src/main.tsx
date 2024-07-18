import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LocaleContextProvider } from "./context/locale.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocaleContextProvider>
      <App />
    </LocaleContextProvider>
  </React.StrictMode>,
);
