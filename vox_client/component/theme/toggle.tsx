import Sun from "@/assets/icons/Sun";
import Moon from "@/assets/icons/moon";
import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const theme = localStorage.getItem("joy-mode");
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
