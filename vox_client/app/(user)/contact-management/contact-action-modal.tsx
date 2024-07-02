"use client";
import CommonCheckBox from "@/component/common/ui/Checkbox";
import CommonInput from "@/component/common/ui/Input";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  ModalDialog,
  ModalOverflow,
  Typography,
} from "@mui/joy";
import React from "react";

interface Props {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactActionModal: React.FC<Props> = ({ isModalOpen, setModalOpen }) => {
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
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout="center">
            <Typography id="modal-dialog-overflow" level="h2">
              Add Contact
            </Typography>
            <Divider />
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} md={6}>
                <FormControl>
                  {/* <CommonInput
                    name="phone"
                    label="Phone"
                    // formik={formik}
                    placeholder="Phone"
                  /> */}
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={6}>
                <FormControl>
                  <FormLabel>Activity</FormLabel>
                  {/* <CommonCheckBox
                    label="isActive"
                    // checked={formik.values.isActive}
                    onChange={(e: any) => {
                      //   formik.setFieldValue("isActive", e.target.checked);
                    }}
                  /> */}
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
                  Save Contact
                </Button>
              </Grid>
            </Grid>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default ContactActionModal;
