import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";

export default function UpProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={1} sx={{ flex: 1, position: "absolute", top: 0 }}>
      <LinearProgress
        variant="plain"
        sx={{ height: "5px", position: "sticky", zIndex: 99999, top: 0 }}
        determinate
        value={progress}
      />
    </Stack>
  );
}
