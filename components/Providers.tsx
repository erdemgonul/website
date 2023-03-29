"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => (
  <ThemeProvider
    attribute="class"
    enableSystem={false}
    enableColorScheme={false}
    defaultTheme="dark"
  >
    {children}
  </ThemeProvider>
);

export default Providers;
