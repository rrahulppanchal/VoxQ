"use client";
import * as React from "react";
import * as Yup from "yup";

import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalOverflow from "@mui/joy/ModalOverflow";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CommonCheckBox from "@/component/common/ui/Checkbox";
import CommonSelect from "@/component/common/ui/Select";
import CommonInput from "@/component/common/ui/Input";
import { Form, Formik } from "formik";
import { Divider, FormHelperText, Grid, IconButton, Textarea } from "@mui/joy";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import OnEye from "@/assets/icons/OnEye";
import OffEye from "@/assets/icons/OffEye";
import dayjs from "dayjs";

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  phone: string;
  userRole: number | null;
  jDate: Date | string;
  lDate: Date | string;
  isActive: boolean;
  userDescription: string;
}

interface Props {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUserData: React.Dispatch<React.SetStateAction<any>>;
  currentStateData: any;
}

const userSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter first name"),
  lastName: Yup.string().required("Enter last name"),
  userName: Yup.string().required("Enter username"),
  password: Yup.string().required("Enter password"),
  phone: Yup.string().required("Enter phone"),
  userRole: Yup.number().required("Select user role"),
  jDate: Yup.string().required("Select joining date"),
  lDate: Yup.string().required("Select leaving date"),
  email: Yup.string().email("Invalid email").required("Enter email"),
});

const OperationsActionsModal: React.FC<Props> = ({
  isModalOpen,
  setModalOpen,
  currentStateData,
  setCurrentUserData,
}) => {
  const [getPasswordView, setPasswordView] = React.useState({
    isPassword: false,
  });

  console.log(currentStateData);

  const initialValues: FormValues = {
    email: currentStateData ? currentStateData?.email : "",
    firstName: currentStateData ? currentStateData?.firstName : "",
    lastName: currentStateData ? currentStateData?.lastName : "",
    userName: currentStateData ? currentStateData?.userName : "",
    password: "",
    phone: currentStateData ? currentStateData?.phone : "",
    userRole: null,
    jDate: currentStateData
      ? dayjs(currentStateData?.jDate).format("YYYY-MM-DD")
      : "",
    lDate: currentStateData
      ? dayjs(currentStateData?.lDate).format("YYYY-MM-DD")
      : "",
    isActive: currentStateData ? currentStateData?.isActive : false,
    userDescription: currentStateData ? currentStateData?.userDescription : "",
  };

  return (
    <React.Fragment>
      <Modal
        open={isModalOpen}
        onClose={() => {}}
        sx={{
          bgcolor: "transparent",
          filter: "saturate(1)",
        }}
      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout="center">
            <Typography id="modal-dialog-overflow" level="h2">
              {currentStateData ? "Edit User" : "Add User"}
            </Typography>
            <Divider />
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={userSchema}
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
                    {!currentStateData && (
                      <Grid xs={12} sm={6} md={6}>
                        <CommonInput
                          name="password"
                          label="Password"
                          type={
                            getPasswordView.isPassword ? "text" : "password"
                          }
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
                    )}
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
                      <FormControl
                        error={
                          formik?.touched.jDate && formik?.errors.jDate
                            ? true
                            : false
                        }
                      >
                        <FormLabel>Joining Date</FormLabel>
                        <DatePicker
                          name="jDate"
                          value={dayjs(formik.values.jDate)}
                          slotProps={{
                            textField: {
                              size: "small",
                              placeholder: "Select date",
                              error:
                                formik?.touched.jDate && formik?.errors.jDate
                                  ? true
                                  : false,
                            },
                          }}
                          onChange={(newValue: dayjs.Dayjs | null) => {
                            formik.setFieldValue("jDate", newValue);
                          }}
                        />
                        {formik?.touched.jDate && formik?.errors.jDate && (
                          <FormHelperText>
                            {formik?.errors.jDate as string}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} marginBottom="5px">
                      <FormControl
                        error={
                          formik?.touched.lDate && formik?.errors.lDate
                            ? true
                            : false
                        }
                      >
                        <FormLabel>Leaving Date</FormLabel>
                        <DatePicker
                          name="lDate"
                          value={dayjs(formik.values.lDate)}
                          slotProps={{
                            textField: {
                              size: "small",
                              placeholder: "Select date",
                              error:
                                formik?.touched.lDate && formik?.errors.lDate
                                  ? true
                                  : false,
                            },
                          }}
                          onChange={(newValue: dayjs.Dayjs | null) => {
                            formik.setFieldValue("lDate", newValue);
                          }}
                        />
                        {formik?.touched.lDate && formik?.errors.lDate && (
                          <FormHelperText>
                            {formik?.errors.lDate as string}
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
                        <CommonCheckBox
                          label="isActive"
                          checked={formik.values.isActive}
                          onChange={(e: any) => {
                            formik.setFieldValue("isActive", e.target.checked);
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
                    <Grid xs={12} sm={12} md={12}>
                      <FormControl>
                        <FormLabel>User description</FormLabel>
                        <Textarea
                          placeholder="User description..."
                          name="userDescription"
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
                          value={formik.values.userDescription}
                          onChange={(e) => {
                            formik.setFieldValue(
                              "userDescription",
                              e.target.value
                            );
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
                        type="button"
                        variant="outlined"
                        onClick={() => {
                          setModalOpen(false);
                          setCurrentUserData(null);
                        }}
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
};

export default OperationsActionsModal;
