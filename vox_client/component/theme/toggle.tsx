import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      variant="soft"
      color="neutral"
      size="sm"
    >
      {mode === "light" ? "D" : "L"}
    </IconButton>
  );
}
