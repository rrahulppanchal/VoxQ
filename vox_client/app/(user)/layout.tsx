"use client";
import Header from "@/component/layout/header";
import Sidebar from "@/component/layout/sidebar";
import { Box, Grid, Stack } from "@mui/joy";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
