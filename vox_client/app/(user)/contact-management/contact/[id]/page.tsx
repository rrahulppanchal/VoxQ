"use client";

import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  Card,
  Chip,
  Divider,
  Dropdown,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  ListDivider,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Step,
  StepIndicator,
  Stepper,
  Typography,
} from "@mui/joy";
import { Grid, useColorScheme } from "@mui/material";
import More from "@/assets/icons/More";
import Edit from "@/assets/icons/Edit";
import Delete from "@/assets/icons/Delete";
import Comment from "./comment";

export default function Page({ params }: { params: { id: string } }) {
  const { mode } = useColorScheme();
  console.log(params.id);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={9}
          sx={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}
        >
          <Box
            sx={{
              px: { xs: 2, md: 2 },
              background: mode === "dark" ? "#0b0d0e" : "#fbfcfe",
              borderBottom:
                mode === "dark"
                  ? "1px solid var(--mui-palette-grey-900)"
                  : "1px solid var(--mui-palette-grey-300)",
            }}
          >
            <Typography level="h3" component="h3" sx={{ pt: 1, mb: 1 }}>
              John Doe - Told to call on 5th july...
            </Typography>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" />}
              spacing={2}
              justifyContent="start"
              marginBottom={2}
            >
              <Typography level="body-sm" sx={{ mb: 2 }}>
                <strong>Created</strong> - Fri 05 july 2024
              </Typography>
              <Typography level="body-sm" sx={{ mb: 2 }}>
                <strong>Last Updated</strong> - Fri 05 july 2024
              </Typography>
              <Typography level="body-sm" sx={{ mb: 2 }}>
                <strong>Follow up</strong> - Fri 05 july 2024
              </Typography>
            </Stack>
          </Box>
          <Sheet
            sx={{
              overflow: "auto",
              flexGrow: 1,
            }}
          >
            <Box sx={{ p: 3, paddingLeft: 10, paddingRight: 10 }}>
              <Stepper orientation="vertical">
                <Step
                  indicator={<StepIndicator variant="solid">1</StepIndicator>}
                >
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography level="body-md">
                      Lead assigned to John
                    </Typography>
                    <Typography level="body-xs">Fri 05 july 2024</Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex, impedit accusamus ratione fugit earum aspernatur
                      obcaecati totam non mollitia pariatur ullam nostrum
                      quibusdam eveniet. Assumenda, molestiae est! Recusandae
                      officiis amet nulla quae modi quas doloremque? Ron Swanson{" "}
                      <br />
                      14 Lakeshore Drive <br />
                      Pawnee, IN 12345 <br />
                      United States <br />
                      T: 555-555-5555
                    </Typography>
                  </Stack>
                </Step>
                <Step
                  indicator={<StepIndicator variant="solid">2</StepIndicator>}
                >
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography level="body-md">
                      John sent advt. mail
                    </Typography>
                    <Typography level="body-xs">Fri 05 july 2024</Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex, impedit accusamus ratione fugit earum aspernatur
                      obcaecati totam non mollitia pariatur ullam nostrum
                      quibusdam eveniet. Assumenda, molestiae est! Recusandae
                      officiis amet nulla quae modi quas doloremque? Ron Swanson{" "}
                      <br />
                      14 Lakeshore Drive <br />
                      Pawnee, IN 12345 <br />
                      United States <br />
                      T: 555-555-5555
                    </Typography>
                  </Stack>
                </Step>
                <Step
                  indicator={<StepIndicator variant="solid">3</StepIndicator>}
                >
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography level="body-md">
                      John called prospect on call
                    </Typography>
                    <Typography level="body-xs">Fri 05 july 2024</Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex, impedit accusamus ratione fugit earum aspernatur
                      obcaecati totam non mollitia pariatur ullam nostrum
                      quibusdam eveniet. Assumenda, molestiae est! Recusandae
                      officiis amet nulla quae modi quas doloremque? Ron Swanson{" "}
                      <br />
                      14 Lakeshore Drive <br />
                      Pawnee, IN 12345 <br />
                      United States <br />
                      T: 555-555-5555
                    </Typography>
                  </Stack>
                </Step>
                <Step
                  indicator={<StepIndicator variant="solid">4</StepIndicator>}
                >
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography level="body-md">
                      Prospect ready for demo
                    </Typography>
                    <Typography level="body-xs">Fri 05 july 2024</Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex, impedit accusamus ratione fugit earum aspernatur
                      obcaecati totam non mollitia pariatur ullam nostrum
                      quibusdam eveniet. Assumenda, molestiae est! Recusandae
                      officiis amet nulla quae modi quas doloremque? Ron Swanson{" "}
                      <br />
                      14 Lakeshore Drive <br />
                      Pawnee, IN 12345 <br />
                      United States <br />
                      T: 555-555-5555
                    </Typography>
                  </Stack>
                </Step>
                <Step
                  indicator={<StepIndicator variant="solid">5</StepIndicator>}
                >
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography level="body-md">
                      Prospect ready for conversion
                    </Typography>
                    <Typography level="body-xs">Fri 05 july 2024</Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex, impedit accusamus ratione fugit earum aspernatur
                      obcaecati totam non mollitia pariatur ullam nostrum
                      quibusdam eveniet. Assumenda, molestiae est! Recusandae
                      officiis amet nulla quae modi quas doloremque? Ron Swanson{" "}
                      <br />
                      14 Lakeshore Drive <br />
                      Pawnee, IN 12345 <br />
                      United States <br />
                      T: 555-555-5555
                    </Typography>
                  </Stack>
                </Step>
                <Step
                  indicator={
                    <StepIndicator variant="solid" color="primary">
                      6
                    </StepIndicator>
                  }
                >
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography level="body-md">Follow up required</Typography>
                    <Typography level="body-xs">Fri 05 july 2024</Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex, impedit accusamus ratione fugit earum aspernatur
                      obcaecati totam non mollitia pariatur ullam nostrum
                      quibusdam eveniet. Assumenda, molestiae est! Recusandae
                      officiis amet nulla quae modi quas doloremque? Ron Swanson{" "}
                      <br />
                      14 Lakeshore Drive <br />
                      Pawnee, IN 12345 <br />
                      United States <br />
                      T: 555-555-5555
                    </Typography>

                    <Dropdown>
                      <MenuButton
                        slots={{ root: Chip }}
                        slotProps={{
                          root: { variant: "outlined", color: "neutral" },
                        }}
                      >
                        More
                      </MenuButton>
                      <Menu
                        placement="bottom-end"
                        variant="outlined"
                        color="neutral"
                      >
                        <MenuItem
                          onClick={(e) => {
                            // setCurentUser(row as IUser);
                            // setMoreOpen(true);
                          }}
                        >
                          <ListItemDecorator sx={{ color: "inherit" }}>
                            {/* <Users /> */}
                          </ListItemDecorator>
                          About
                        </MenuItem>
                        <MenuItem>
                          <ListItemDecorator>
                            <Edit />
                          </ListItemDecorator>
                          Edit
                        </MenuItem>
                        <ListDivider />
                        <MenuItem variant="plain" color="danger">
                          <ListItemDecorator sx={{ color: "inherit" }}>
                            <Delete />
                          </ListItemDecorator>
                          Delete
                        </MenuItem>
                      </Menu>
                    </Dropdown>
                  </Stack>
                </Step>
              </Stepper>
            </Box>
          </Sheet>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              borderRadius: 0,
              height: "100vh",
              border: "none",
              borderLeft:
                mode === "dark"
                  ? "1px solid var(--mui-palette-grey-900)"
                  : "1px solid var(--mui-palette-grey-300)",
            }}
          >
            <Grid>
              {" "}
              <Typography level="title-lg">Actions</Typography>
            </Grid>
            <Grid>
              <FormControl id="free-solo-demo">
                <FormLabel>Status</FormLabel>
                <Autocomplete
                  freeSolo
                  variant="soft"
                  placeholder="Status"
                  name="assignee"
                  // value={
                  //   formik.values.assignee &&
                  //   assigneeOptions?.find(
                  //     (i) => i.value === formik.values.assignee
                  //   )
                  // }
                  disabled
                  value={{ label: "active", value: 1 }}
                  options={[]}
                  onChange={(e, value) => {
                    // formik.setFieldValue("assignee", (value as any)?.value);
                  }}
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl id="free-solo-demo">
                <FormLabel>Change assignee</FormLabel>
                <Autocomplete
                  freeSolo
                  variant="soft"
                  disabled
                  placeholder="Search to assign"
                  name="assignee"
                  // value={
                  //   formik.values.assignee &&
                  //   assigneeOptions?.find(
                  //     (i) => i.value === formik.values.assignee
                  //   )
                  // }
                  value={{ label: "john doe", value: 1 }}
                  options={[]}
                  onChange={(e, value) => {
                    // formik.setFieldValue("assignee", (value as any)?.value);
                  }}
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl id=" ">
                <FormLabel>Name</FormLabel>
                <Input value="John Doe" variant="soft" disabled />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl id=" ">
                <FormLabel>Email</FormLabel>
                <Input value="johndoe@email.com" variant="soft" disabled />
              </FormControl>
            </Grid>

            <Grid>
              <FormControl id="free-solo-demo">
                <FormControl id=" ">
                  <FormLabel>Phone</FormLabel>
                  <Input value="+91 9856898956" variant="soft" disabled />
                </FormControl>
              </FormControl>
            </Grid>
            <Grid textAlign="end" marginTop={1}>
              <Button variant="soft" color="neutral">
                Save details
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
