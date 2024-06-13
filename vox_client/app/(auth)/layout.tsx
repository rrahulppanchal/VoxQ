"use client";
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
    if (loginData?.accessToken) {
      redirect("/");
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
