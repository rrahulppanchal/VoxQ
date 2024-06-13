"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Switch from "@mui/joy/Switch";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalOverflow from "@mui/joy/ModalOverflow";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Add from "@/assets/icons/Add";
import CommonButton from "@/component/common/ui/Button";
import CommonCheckBox from "@/component/common/ui/Checkbox";
import CommonSelect from "@/component/common/ui/Select";
import CommonInput from "@/component/common/ui/Input";
import { Form, Formik } from "formik";
import {
  ButtonGroup,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Textarea,
} from "@mui/joy";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import OnEye from "@/assets/icons/OnEye";
import OffEye from "@/assets/icons/OffEye";
import { DownArrow } from "@/assets/icons/Arrow";

interface FormValues {
  email: string;
  movies: string;
}

const options = ["Add New User", "Import Users"];

export default function OperationsActionsModal() {
  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);
  const [getPasswordView, setPasswordView] = React.useState({
    isPassword: false,
  });
  const [open, setOpen] = React.useState(false);
  const actionRef = React.useRef<() => void | null>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    if (options[selectedIndex] === "Add New User") {
      setLayout("center");
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const initialValues: FormValues = { email: "", movies: "" };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    // if (!values.email) {
    //   errors.email = "Required";
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = "Invalid email address";
    // }
    // if (!values.movies) {
    //   errors.movies = "Required";
    // }
    // return errors;
  };
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        {/* <Button
          startDecorator={<Add />}
          onClick={() => {
            setLayout("center");
          }}
        >
          Add User
        </Button> */}
        <ButtonGroup
          ref={anchorRef}
          variant="solid"
          color="primary"
          aria-label="split button"
        >
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <IconButton
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onMouseDown={() => {
              // @ts-ignore
              actionRef.current = () => setOpen(!open);
            }}
            onKeyDown={() => {
              // @ts-ignore
              actionRef.current = () => setOpen(!open);
            }}
            onClick={() => {
              actionRef.current?.();
            }}
          >
            <DownArrow />
          </IconButton>
        </ButtonGroup>
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorEl={anchorRef.current}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 2}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      <Modal
        open={!!layout}
        onClose={() => {
          // setLayout(undefined);
        }}
        sx={{
          bgcolor: "transparent",
          filter: "saturate(1)",
        }}
      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout={layout}>
            <Typography id="modal-dialog-overflow" level="h2">
              Add User
              {/* <ModalClose /> */}
            </Typography>
            <Divider />
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={(values) => console.log(values)}
            >
              {(formik) => (
                <Form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6}>
                      <CommonInput
                        name="firstName"
                        label="First Name"
                        formik={formik}
                        placeholder="First Name"
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                      <CommonInput
                        name="lastName"
                        label="Last Name"
                        formik={formik}
                        placeholder="Last Name"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6}>
                      <CommonInput
                        name="userName"
                        label="Username"
                        formik={formik}
                        placeholder="Username"
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                      <CommonInput
                        name="email"
                        label="Email"
                        formik={formik}
                        placeholder="Email"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6}>
                      <CommonInput
                        name="password"
                        label="Password"
                        type={getPasswordView.isPassword ? "text" : "password"}
                        formik={formik}
                        placeholder="Password"
                        endDecorator={
                          <IconButton
                            variant="soft"
                            sx={{ borderRadius: "50vw" }}
                            onClick={() => {
                              setPasswordView((prev: any) => ({
                                isPassword: !prev.isPassword,
                              }));
                            }}
                          >
                            {getPasswordView.isPassword ? (
                              <OnEye />
                            ) : (
                              <OffEye />
                            )}
                          </IconButton>
                        }
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                      <CommonSelect
                        name="userRole"
                        options={[
                          { label: "Admin", value: 1 },
                          { label: "Moderator", value: 2 },
                          { label: "User", value: 3 },
                        ]}
                        label="User Role"
                        formik={formik}
                        placeholder="User Role"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6} marginBottom="5px">
                      <FormControl>
                        <FormLabel>Joining Date</FormLabel>
                        <DatePicker
                          slotProps={{
                            textField: {
                              size: "small",
                              placeholder: "Select date",
                            },
                          }}
                        />
                        {false && (
                          <FormHelperText>
                            This is a helper text.
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} marginBottom="5px">
                      <FormControl>
                        <FormLabel>Leaving Date</FormLabel>
                        <DatePicker
                          slotProps={{
                            textField: {
                              size: "small",
                              placeholder: "Select date",
                            },
                          }}
                        />
                        {false && (
                          <FormHelperText>
                            This is a helper text.
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6}>
                      <FormControl>
                        <CommonInput
                          name="phone"
                          label="Phone"
                          formik={formik}
                          placeholder="Phone"
                        />
                      </FormControl>
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                      <FormControl>
                        <FormLabel>Activity</FormLabel>
                        <CommonCheckBox label="Active" checked />
                        {false && (
                          <FormHelperText>
                            This is a helper text.
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={12} md={12}>
                      <FormControl>
                        <FormLabel>User description</FormLabel>
                        <Textarea
                          placeholder="User description..."
                          minRows={2}
                          sx={{
                            "&::before": {
                              display: "none",
                            },
                            "&:focus-within": {
                              outline:
                                "2px solid var(--Textarea-focusedHighlight)",
                              outlineOffset: "2px",
                            },
                          }}
                        />
                        {false && (
                          <FormHelperText>
                            This is a helper text.
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Stack
                    direction="row"
                    spacing={1}
                    marginTop={2}
                    textAlign="end"
                    fontSize="11px"
                  >
                    * Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Stack>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6} marginTop={2}>
                      <Button
                        sx={{ width: "100%", borderRadius: "50vw" }}
                        name="Cancel"
                        color="primary"
                        type="submit"
                        variant="outlined"
                        onClick={() => setLayout(undefined)}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} marginTop={2}>
                      <Button
                        sx={{ width: "100%", borderRadius: "50vw" }}
                        color="primary"
                        type="submit"
                        variant="solid"
                      >
                        Save Lead
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </React.Fragment>
  );
}
