"use client";
import UpProgress from "@/component/common/ui/UpProgress";
import Header from "@/component/layout/header";
import Sidebar from "@/component/layout/sidebar";
import { Box, Grid, Stack } from "@mui/joy";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLayoutEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData") as string);
    if (!loginData?.accessToken) {
      redirect("/auth/login");
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <UpProgress />
        <Grid container spacing={0} sx={{ height: "100vh", width: "100%" }}>
          <Stack direction="row" flexGrow={1}>
            <Sidebar />
            <Header />
            {children}
          </Stack>
        </Grid>
      </body>
    </html>
  );
}
