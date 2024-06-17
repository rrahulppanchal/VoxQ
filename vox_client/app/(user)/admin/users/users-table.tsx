import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import {
  Avatar,
  Box,
  Chip,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  Dropdown,
  Grid,
  IconButton,
  ListDivider,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
  ModalClose,
  Typography,
} from "@mui/joy";
import More from "@/assets/icons/More";
import Edit from "@/assets/icons/Edit";
import Delete from "@/assets/icons/Delete";
import Users from "@/assets/icons/Users";
import Password from "@/assets/icons/Password";

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
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  jDate: string;
  lDate: string;
  isActive: boolean;
  userDescription: string;
}

interface Props {
  editAction: any;
  deleteAction: any;
  changePasswordAction: any;
}

const UsersTable: React.FC<Props> = ({
  editAction,
  deleteAction,
  changePasswordAction,
}) => {
  const [open, setOpen] = React.useState(false);
  const [getCurentUser, setCurentUser] = React.useState<IUser>();

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };
  return (
    <>
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
            {rows.map((row: IUser, index: number) => (
              <tr key={index}>
                {/* <th scope="row">{row.userName}</th> */}
                <td>
                  <span
                    className="pointer"
                    onClick={() => {
                      setCurentUser(row as IUser);
                      setOpen(true);
                    }}
                  >
                    {row.userName}
                  </span>
                </td>
                <td>{row.email}</td>
                <td>
                  <Chip
                    color={row.isActive ? "success" : "danger"}
                    disabled={false}
                    // onClick={function () {}}
                    size="md"
                    variant="soft"
                  >
                    {row.isActive ? "Active" : "Inactive"}
                  </Chip>
                </td>
                <td>
                  {" "}
                  <Dropdown>
                    <MenuButton
                      slots={{ root: IconButton }}
                      slotProps={{
                        root: { variant: "plain", color: "neutral" },
                      }}
                    >
                      <More />
                    </MenuButton>
                    <Menu placement="bottom-end">
                      <MenuItem
                        onClick={(e) => {
                          setCurentUser(row as IUser);
                          setOpen(true);
                        }}
                      >
                        <ListItemDecorator sx={{ color: "inherit" }}>
                          <Users />
                        </ListItemDecorator>
                        About
                      </MenuItem>
                      <MenuItem onClick={() => editAction(row)}>
                        <ListItemDecorator>
                          <Edit />
                        </ListItemDecorator>
                        Edit
                      </MenuItem>
                      {/* <ListDivider /> */}
                      <MenuItem
                        variant="plain"
                        color="warning"
                        onClick={() => changePasswordAction(row)}
                      >
                        <ListItemDecorator sx={{ color: "inherit" }}>
                          <Password />
                        </ListItemDecorator>
                        Change password
                      </MenuItem>
                      <MenuItem
                        variant="plain"
                        color="danger"
                        onClick={() => deleteAction(row)}
                      >
                        <ListItemDecorator sx={{ color: "inherit" }}>
                          <Delete />
                        </ListItemDecorator>
                        Delete
                      </MenuItem>
                    </Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </Table>
      </Sheet>
      {/* <Box sx={{ display: "flex", background: "transparent" }}> */}
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(!open)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "10px 0 0 10px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>
            {" "}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Avatar src="/static/images/avatar/1.jpg" size="lg" />
            </Box>
            <Grid flexDirection="column">
              <Typography level="title-md">
                {getCurentUser?.firstName} {getCurentUser?.lastName}
                <Chip
                  sx={{ marginLeft: "7px" }}
                  color={getCurentUser?.isActive ? "success" : "danger"}
                  disabled={false}
                  // onClick={function () {}}
                  size="sm"
                  variant="soft"
                >
                  {getCurentUser?.isActive ? "Active" : "Inactive"}
                </Chip>
              </Typography>
              <Typography level="body-xs">Admin</Typography>
            </Grid>
          </DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent sx={{ gap: 2 }}>
            <Grid container>
              <Grid xs={12} sm={6} md={6}>
                <Typography level="body-sm">First Name</Typography>
                <Typography level="body-md">
                  {getCurentUser?.firstName}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6}>
                <Typography level="body-sm">Last Name</Typography>
                <Typography level="body-md">
                  {getCurentUser?.lastName}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={6} md={6}>
                <Typography level="body-sm">Email</Typography>
                <Typography level="body-md">{getCurentUser?.email}</Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6}>
                <Typography level="body-sm">Username</Typography>
                <Typography level="body-md">
                  {getCurentUser?.userName}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={6} md={6}>
                <Typography level="body-sm">Joining Date</Typography>
                <Typography level="body-md">{getCurentUser?.jDate}</Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6}>
                <Typography level="body-sm">Leaving Date</Typography>
                <Typography level="body-md">{getCurentUser?.lDate}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={12} md={12}>
                <Typography level="body-sm">User Description</Typography>
                <Typography level="body-md">
                  {getCurentUser?.userDescription}
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Sheet>
      </Drawer>
      {/* </Box> */}
    </>
  );
};

export default UsersTable;
