import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ModalProvider } from "./context/ModalProvider.tsx";
import { GiftProvider } from "./context/GiftProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <GiftProvider>
        <App />
      </GiftProvider>
    </ModalProvider>
  </React.StrictMode>
);
