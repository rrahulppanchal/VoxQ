"use client";
import * as React from "react";
import * as Yup from "yup";

import CommonInput from "@/component/common/ui/Input";
import {
  Button,
  Grid,
  IconButton,
  Modal,
  ModalDialog,
  ModalOverflow,
  Typography,
} from "@mui/joy";
import { Form, Formik } from "formik";
import OnEye from "@/assets/icons/OnEye";
import OffEye from "@/assets/icons/OffEye";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormValues = {
  email: string;
  passWord: string;
  confirmPassWord: string;
};

const ChangePassword: React.FC<Props> = ({ open, setOpen }) => {
  const [getPasswordView, setPasswordView] = React.useState({
    isPassword: false,
    isConfirmPassword: false,
  });
  const initialValues: FormValues = {
    email: "",
    passWord: "",
    confirmPassWord: "",
  };
  const userSchema = Yup.object().shape({
    password: Yup.string().required("Enter password"),
    email: Yup.string().email("Invalid email").required("Enter email"),
  });
  return (
    <>
      <Modal
        open={open}
        onClose={() => {}}
        sx={{
          bgcolor: "transparent",
          filter: "saturate(1)",
        }}
      >
        <ModalOverflow>
          <ModalDialog
            aria-labelledby="modal-dialog-overflow"
            layout="center"
            color="warning"
          >
            <Typography id="modal-dialog-overflow" level="h2">
              Change Password
            </Typography>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={userSchema}
              onSubmit={(values) => console.log(values)}
            >
              {(formik) => (
                <Form>
                  <Grid container spacing={1} maxWidth="500px">
                    <Grid xs={12} sm={12} md={12}>
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
                                ...prev,
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
                    <Grid xs={12} sm={12} md={12}>
                      <CommonInput
                        name="password"
                        label="Password"
                        type={
                          getPasswordView.isConfirmPassword
                            ? "text"
                            : "password"
                        }
                        formik={formik}
                        placeholder="Confirm Password"
                        endDecorator={
                          <IconButton
                            variant="soft"
                            sx={{ borderRadius: "50vw" }}
                            onClick={() => {
                              setPasswordView((prev: any) => ({
                                ...prev,
                                isConfirmPassword: !prev.isConfirmPassword,
                              }));
                            }}
                          >
                            {getPasswordView.isConfirmPassword ? (
                              <OnEye />
                            ) : (
                              <OffEye />
                            )}
                          </IconButton>
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6} marginTop={2}>
                      <Button
                        sx={{ width: "100%", borderRadius: "50vw" }}
                        name="Cancel"
                        color="warning"
                        type="button"
                        variant="outlined"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid xs={6} sm={6} md={6} marginTop={2}>
                      <Button
                        sx={{ width: "100%", borderRadius: "50vw" }}
                        color="warning"
                        type="submit"
                        variant="solid"
                      >
                        Change Password
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default ChangePassword;
