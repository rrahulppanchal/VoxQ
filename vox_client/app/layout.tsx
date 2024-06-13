"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { StyledEngineProvider } from "@mui/joy/styles";
import { materialTheme, theme } from "@/component/theme/colors";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          <JoyCssVarsProvider defaultMode="system" theme={theme}>
            <MaterialCssVarsProvider
              defaultMode="system"
              theme={{ [MATERIAL_THEME_ID]: materialTheme }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
              </LocalizationProvider>
            </MaterialCssVarsProvider>
          </JoyCssVarsProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
