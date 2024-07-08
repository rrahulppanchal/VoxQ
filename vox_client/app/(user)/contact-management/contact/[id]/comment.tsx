"use client";
import React from "react";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";

import {
  Button,
  Divider,
  FormControl,
  Grid,
  Modal,
  ModalDialog,
  ModalOverflow,
  Textarea,
  Typography,
} from "@mui/joy";

function Comment() {
  const contactSchema = Yup.object().shape({
    // assignee: Yup.string().required("Select assignee"),
    // status: Yup.number().required("Select status"),
  });
  const initialValues: FormikValues = {
    // assignee: "",
    // status: null,
  };
  const handleFormSubmit = function (values: FormikValues) {
    console.log(values);
  };
  return (
    <>
      <Modal
        open={true}
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
              width: "650px",
            }}
          >
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography id="modal-dialog-overflow" level="h2">
                Add Comment
              </Typography>
            </Grid>
            <Divider />
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={(values) => handleFormSubmit(values)}
            >
              {(formik) => (
                <Form>
                  <Grid container spacing={1} display="flex" alignItems="end">
                    <Grid xs={12} sm={12} md={12}>
                      <FormControl
                        id="free-solo-demo"
                        sx={{ display: "flex", gap: "8px" }}
                        error={
                          formik.touched.assignee && formik.errors.assignee
                            ? true
                            : false
                        }
                      >
                        <Textarea
                          placeholder="Write your comment here…"
                          minRows={7}
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
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6} marginTop={2}>
                      <Button
                        sx={{ width: "100%", borderRadius: "50vw" }}
                        name="Cancel"
                        color="neutral"
                        type="button"
                        variant="outlined"
                        onClick={() => {
                          //   setModalOpen(false);
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
                        Add Comment
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
}

export default Comment;
