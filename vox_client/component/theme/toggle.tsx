"use client";
import Sun from "@/assets/icons/Sun";
import Moon from "@/assets/icons/Moon";
import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const preference = window.localStorage.getItem("joy-mode");
    setTheme(preference as string);
  }, [mode]);

  return (
    <IconButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      variant="soft"
      color="neutral"
      size="sm"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </IconButton>
  );
}
