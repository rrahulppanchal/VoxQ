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
  useColorScheme,
} from "@mui/joy";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

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

interface Props {
  data: any;
  paginationHandleChange:
    | ((event: ChangeEvent<unknown>, page: number) => void)
    | undefined;
}

const ContactTable: React.FC<Props> = ({ data, paginationHandleChange }) => {
  const router = useRouter();
  const { mode } = useColorScheme();
  const [open, setOpen] = React.useState(false);

  const statusMap: any = {
    1: { color: "success", label: "Active" },
    2: { color: "danger", label: "In Active" },
    3: { color: "warning", label: "Follow up" },
    4: { color: "neutral", label: "No action" },
    5: { color: "success", label: "Verified" },
    default: { color: "danger", label: "Unverified" },
  };

  const getStatusProps = (status: any) =>
    statusMap[status] || statusMap.default;

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
            hoverRow
            sx={{
              "& tbody tr:hover": {
                backgroundColor:
                  mode == "dark"
                    ? "var(--mui-palette-grey-900)"
                    : "var(--mui-palette-grey-100)",
              },
            }}
          >
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th style={{ width: "90px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.contacts?.length > 0 ? (
                data?.contacts?.map((row: any, index: number) => (
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
                            {row.first_name + " " + row.last_name}
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
                        <td>{row.phone}</td>
                        <td>
                          <Chip
                            color={getStatusProps(row.status).color}
                            disabled={false}
                            size="md"
                            variant="soft"
                          >
                            {getStatusProps(row.status).label}
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
                  <td colSpan={5}>
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
                <th colSpan={5}>
                  <Stack
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    {data?.contacts?.length > 0 && (
                      <Pagination
                        count={data?.meta?.totalPages}
                        page={data?.meta?.currentPage}
                        onChange={paginationHandleChange}
                        shape="rounded"
                      />
                    )}
                  </Stack>
                </th>
              </tr>
            </tfoot>
          </Table>
        </Sheet>
      </Grid>
    </>
  );
};

export default ContactTable;
