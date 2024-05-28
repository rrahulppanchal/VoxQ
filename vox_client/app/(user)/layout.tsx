"use client";
import Header from "@/component/layout/header";
import Sidebar from "@/component/layout/sidebar";
import { Box, Grid } from "@mui/joy";
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
          <Grid>
            <Sidebar />
          </Grid>
          <Grid flexGrow={1}>
            <Header />
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
