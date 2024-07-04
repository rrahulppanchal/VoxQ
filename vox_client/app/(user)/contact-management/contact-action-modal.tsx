"use client";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikValues,
} from "formik";
import React from "react";
import * as Yup from "yup";

import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Modal,
  ModalDialog,
  ModalOverflow,
  Typography,
} from "@mui/joy";

import CommonCheckBox from "@/component/common/ui/Checkbox";
import CommonInput from "@/component/common/ui/Input";
import Add from "@/assets/icons/Add";
import Delete from "@/assets/icons/Delete";
import CommonSelect from "@/component/common/ui/Select";
interface Props {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IEpandedUser {
  name: string;
  email: string;
  phone: string;
}

const ContactActionModal: React.FC<Props> = ({ isModalOpen, setModalOpen }) => {
  const contactSchema = Yup.object().shape({
    // firstName: Yup.string().required("Enter first name"),
    users: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required"),
        phone: Yup.string().required("Phone is required"),
      })
    ),
  });
  const initialValues: FormikValues = {
    users: [{ name: "", email: "", phone: "" }],
  };

  const handleFormSubmit = function (values: FormikValues) {
    console.log(values);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
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
            size="lg"
            sx={{
              width: "800px",
            }}
          >
            <Typography id="modal-dialog-overflow" level="h2">
              Add Multiple Contacts
            </Typography>
            <Divider />
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={(values) => handleFormSubmit(values)}
            >
              {(formik) => (
                <Form>
                  <FieldArray name="users">
                    {(arrayHelpers) => (
                      <div>
                        {formik.values.users.map(
                          (user: IEpandedUser, index: number) => (
                            <div key={index}>
                              <Typography
                                level="title-md"
                                margin={1}
                                marginTop={index === 0 ? 0 : 1}
                              >
                                User {index + 1}.
                              </Typography>
                              <Grid container spacing={1}>
                                <Grid
                                  xs={12}
                                  sm={4}
                                  md={4}
                                  display="flex"
                                  alignItems="center"
                                  gap={1}
                                >
                                  <FormControl
                                    error={
                                      formik?.touched.users &&
                                      formik?.touched?.users
                                        ? true
                                        : false
                                    }
                                    sx={{ width: "100%" }}
                                  >
                                    {/* <FormLabel>Name</FormLabel> */}
                                    <Input
                                      sx={{
                                        "&::before": {
                                          display: "none",
                                        },
                                        "&:focus-within": {
                                          outline:
                                            "2px solid var(--Input-focusedHighlight)",
                                          outlineOffset: "2px",
                                        },
                                      }}
                                      name={`users.${index}.name`}
                                      type="text"
                                      placeholder="Enter name"
                                    />
                                    {/* <FormHelperText>Test</FormHelperText> */}
                                  </FormControl>
                                </Grid>
                                <Grid xs={12} sm={4} md={4}>
                                  <FormControl
                                    error={
                                      formik?.touched.users &&
                                      formik?.touched?.users
                                        ? true
                                        : false
                                    }
                                    sx={{ width: "100%" }}
                                  >
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <Input
                                      sx={{
                                        "&::before": {
                                          display: "none",
                                        },
                                        "&:focus-within": {
                                          outline:
                                            "2px solid var(--Input-focusedHighlight)",
                                          outlineOffset: "2px",
                                        },
                                      }}
                                      name={`users.${index}.email`}
                                      type="text"
                                      placeholder="Enter email"
                                    />
                                    {/* <FormHelperText>Test</FormHelperText> */}
                                  </FormControl>
                                </Grid>
                                <Grid
                                  xs={12}
                                  sm={4}
                                  md={4}
                                  display="flex"
                                  alignItems="center"
                                  gap={1}
                                >
                                  <FormControl
                                    error={
                                      formik?.touched.users &&
                                      formik?.touched?.users
                                        ? true
                                        : false
                                    }
                                    sx={{ width: "65%" }}
                                  >
                                    {/* <FormLabel>Phone</FormLabel> */}
                                    <Input
                                      sx={{
                                        "&::before": {
                                          display: "none",
                                        },
                                        "&:focus-within": {
                                          outline:
                                            "2px solid var(--Input-focusedHighlight)",
                                          outlineOffset: "2px",
                                        },
                                      }}
                                      name={`users.${index}.phone`}
                                      type="text"
                                      placeholder="Enter phone"
                                    />
                                    {/* <FormHelperText>Test</FormHelperText> */}
                                  </FormControl>
                                  <IconButton
                                    variant="outlined"
                                    color="success"
                                    onClick={() =>
                                      arrayHelpers.push({
                                        name: "",
                                        email: "",
                                        phone: "",
                                      })
                                    }
                                  >
                                    <Add />
                                  </IconButton>
                                  <IconButton
                                    variant="soft"
                                    color="danger"
                                    disabled={index === 0}
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    <Delete />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </FieldArray>
                  <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />
                  <Typography margin={1} level="title-md">
                    Assign contacts for verification...
                  </Typography>
                  <Grid container spacing={1} display="flex" alignItems="end">
                    <Grid xs={7} sm={4} md={4}>
                      <FormControl
                        id="free-solo-demo"
                        sx={{ display: "flex", gap: "8px" }}
                      >
                        <Autocomplete
                          freeSolo
                          placeholder="Search to assign"
                          options={[
                            { label: "Assign to me", value: 1 },
                            { label: "John doe", value: 2 },
                          ]}
                        />
                      </FormControl>
                    </Grid>
                    <Grid xs={5} sm={4} md={4}>
                      <Button variant="soft" color="neutral">
                        Assign to me
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography margin={1} level="title-md">
                    Set the priority
                  </Typography>
                  <Grid container spacing={1} display="flex" alignItems="end">
                    <Grid xs={7} sm={4} md={4}>
                      <FormControl
                        id="free-solo-demo"
                        sx={{ display: "flex", gap: "8px" }}
                      >
                        <Autocomplete
                          freeSolo
                          placeholder="Priority"
                          options={[
                            { label: "High", value: 1 },
                            { label: "Low", value: 2 },
                          ]}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  {/* <Grid container spacing={1}>
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
                          // checked={formik.values.isActive}
                          onChange={(e: any) => {
                            //   formik.setFieldValue("isActive", e.target.checked);
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid> */}
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6} marginTop={2}>
                      <Button
                        sx={{ width: "100%", borderRadius: "50vw" }}
                        name="Cancel"
                        color="neutral"
                        type="button"
                        variant="outlined"
                        onClick={() => {
                          setModalOpen(false);
                          // setCurrentUserData(null);
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
                        Save Contacts
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

export default ContactActionModal;
