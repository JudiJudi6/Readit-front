"use client";

import React, { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../_redux/store";
import ScrollToTop from "./ScrollToTop";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#70e000",
    },
    primary: {
      main: "#9ef01a",
    },
  },
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 3;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <div>
      <Provider store={store}>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              zIndex: 1000,
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
            className: "text-dark",
          }}
        />
        <MuiThemeProvider theme={theme}>
          <ScrollToTop>{children}</ScrollToTop>
        </MuiThemeProvider>
      </Provider>
    </div>
  );
}
