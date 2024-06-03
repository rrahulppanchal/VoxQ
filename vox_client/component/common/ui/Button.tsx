import { Button } from "@mui/joy";

interface CommonButtonProps {
  name?: string;
  type?: string;
  rounded?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  name = "Submit",
  type = "submit",
  rounded = false,
  ...props
}) => {
  return (
    <>
      <Button
        sx={{ width: "100%", borderRadius: rounded ? "50vw" : "" }}
        type={type}
        {...props}
      >
        {name}
      </Button>
    </>
  );
};

export default CommonButton;
