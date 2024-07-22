import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LocaleContextProvider } from "./context/locale.context.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./react-query/query-client/query-client.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocaleContextProvider>
        <App />
      </LocaleContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
