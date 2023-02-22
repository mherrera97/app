import { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";
import { OffLine } from "./ui/OffLine";

export const GestorApp = () => {
  const [online, setOnline] = useState(navigator.onLine);
  window.addEventListener("offline", () => {
    setOnline(false);
  });
  window.addEventListener("online", () => {
    setOnline(true);
  });
  return (
    <AppTheme>
      {!online ? <OffLine /> : ""}
      <AppRouter />
    </AppTheme>
  );
};
