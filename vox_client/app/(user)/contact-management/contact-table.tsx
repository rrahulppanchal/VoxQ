import Delete from "@/assets/icons/Delete";
import Edit from "@/assets/icons/Edit";
import More from "@/assets/icons/More";
import {
  Box,
  Chip,
  Dropdown,
  Grid,
  IconButton,
  Link,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Table,
  Tooltip,
  Typography,
} from "@mui/joy";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function createData(
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  phone: string,
  jDate: string,
  lDate: string,
  isActive: boolean,
  userDescription: string
) {
  return {
    userName,
    firstName,
    lastName,
    email,
    role,
    phone,
    jDate,
    lDate,
    isActive,
    userDescription,
  };
}

const rows = [
  createData(
    "johndoe",
    "John",
    "Doe",
    "johndoe@email.com",
    "Admin",
    "+91 9999999999",
    "2022-02-03",
    "2024-02-03",
    true,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde aspernatur illo labore consequatur magni est, expedita, exercitationem laudantium iure alias, porro facilis doloremque. Explicabo facilis id molestiae ipsum est?"
  ),
  createData(
    "johndoe",
    "John 1",
    "Doe",
    "johndoe@email.com",
    "Admin",
    "+91 9999999999",
    "2022-06-02",
    "2024-06-02",
    false,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde aspernatur illo labore consequatur magni est, expedita, exercitationem laudantium iure alias, porro facilis doloremque. Explicabo facilis id molestiae ipsum est?"
  ),
];

interface IUser {
  idstring: number;
  user_name: string;
  user_email: string;
  password?: string;
  first_name: string;
  last_name: string;
  description: string;
  phone: string;
  j_date: Date | string;
  l_date?: Date | string | null;
  user_role: string;
  is_deleted?: false;
  is_active?: false;
  created_at?: Date;
  updated_at?: Date;
}

function ContactTable() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const data: any = [{ email: "test@email.com" }];

  return (
    <>
      <Grid>
        <Sheet
          variant="outlined"
          sx={{ borderRadius: "md", width: "100%", overflowY: "auto" }}
        >
          <Table
            variant="plain"
            borderAxis="bothBetween"
            color="neutral"
            size="lg"
          >
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Activity</th>
                <th style={{ width: "90px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data?.map((row: any, index: number) => (
                  <>
                    <Tooltip
                      variant="outlined"
                      arrow
                      placement="top-start"
                      enterDelay={1000}
                      title={
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 320,
                            justifyContent: "center",
                            p: 1,
                          }}
                        >
                          <Typography
                            fontSize="sm"
                            textColor="grey"
                            startDecorator={
                              <Link
                                underline="always"
                                href="#common-examples"
                                color="neutral"
                                fontSize="sm"
                              >
                                mui/material-ui
                              </Link>
                            }
                          >
                            on Feb 25
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              width: "100%",
                              mt: 1,
                            }}
                          >
                            {/* <AdjustIcon color="success" /> */}
                            <div>
                              <Typography fontWeight="lg" fontSize="sm">
                                [system] grey is no more recognized as color
                                with the sx prop
                              </Typography>
                              <Typography
                                textColor="text.secondary"
                                fontSize="sm"
                                sx={{ mb: 1 }}
                              >
                                Duplicates I have searched the existing issues
                                Latest version I have tested the …
                              </Typography>
                              <Chip
                                size="sm"
                                color="danger"
                                sx={{ fontWeight: "lg" }}
                              >
                                bug 🐛
                              </Chip>
                              <Chip
                                size="sm"
                                color="primary"
                                sx={{ ml: 1, fontWeight: "lg" }}
                              >
                                package: system
                              </Chip>
                            </div>
                          </Box>
                        </Box>
                      }
                    >
                      {/* <Link
                        href="#common-examples"
                        underline="none"
                        startDecorator={<AdjustIcon color="success" />}
                        sx={{ fontWeight: "lg" }}
                      >
                        [system] grey is no more recognized as color with the sx
                        prop
                      </Link> */}

                      <tr key={index}>
                        <td>
                          <span
                            className="pointer"
                            onClick={() => {
                              // setCurentUser(row as IUser);
                              // setOpen(true);
                              router.push("/contact-management/contact/3");
                            }}
                          >
                            {row.email}
                            {/* <Chip
                        disabled={false}
                        // onClick={function () {}}
                        size="sm"
                        variant="soft"
                        color={row.user_role === "Admin" ? "danger" : "warning"}
                      >
                        {row.user_role}
                      </Chip> */}
                          </span>
                        </td>
                        <td>{row.email}</td>
                        <td>
                          <Chip
                            color={row.is_active ? "success" : "danger"}
                            disabled={false}
                            // onClick={function () {}}
                            size="md"
                            variant="soft"
                          >
                            {row.is_active ? "Active" : "Inactive"}
                          </Chip>
                        </td>
                        <td>
                          <Dropdown>
                            <MenuButton
                              slots={{ root: IconButton }}
                              slotProps={{
                                root: { variant: "plain", color: "neutral" },
                              }}
                            >
                              <More />
                            </MenuButton>
                            <Menu
                              placement="bottom-end"
                              variant="outlined"
                              color="neutral"
                            >
                              <MenuItem
                                onClick={(e) => {
                                  // setCurentUser(row as IUser);
                                  setOpen(true);
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
                              {/* <ListDivider /> */}
                              {/* <MenuItem
                            variant="plain"
                            color="warning"
                          >
                            <ListItemDecorator sx={{ color: "inherit" }}>
                            </ListItemDecorator>
                            Change password
                          </MenuItem> */}
                              <MenuItem variant="plain" color="danger">
                                <ListItemDecorator sx={{ color: "inherit" }}>
                                  <Delete />
                                </ListItemDecorator>
                                Delete
                              </MenuItem>
                            </Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    </Tooltip>
                  </>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>
                    <Sheet
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "30px",
                      }}
                    >
                      <Typography fontSize="22px">No User Available</Typography>
                    </Sheet>
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={4}>
                  <Stack
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <Pagination count={10} shape="rounded" />
                  </Stack>
                </th>
              </tr>
            </tfoot>
          </Table>
        </Sheet>
      </Grid>
    </>
  );
}

export default ContactTable;
