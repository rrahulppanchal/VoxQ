import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";

export default function UpProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 5
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loader_bar">
      <LinearProgress
        variant="plain"
        sx={{ height: "2px" }}
        determinate
        value={progress}
      />
    </div>
  );
}
