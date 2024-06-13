import { Box, Checkbox, Sheet } from "@mui/joy";

interface CommonCheckBoxProps {
  name?: string;
  label?: string;
  type?: string;
  rounded?: boolean;
  checked?: boolean;
}

const CommonCheckBox: React.FC<CommonCheckBoxProps> = ({
  name = "Submit",
  type = "submit",
  label = "Check Box",
  rounded = false,
  checked = false,
  ...props
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: "100%",
          "& > div": { p: 1, borderRadius: "sm", display: "flex" },
        }}
      >
        <Sheet variant="outlined">
          <Checkbox overlay label={label} checked={checked} {...props} />
        </Sheet>
      </Box>
    </>
  );
};

export default CommonCheckBox;
