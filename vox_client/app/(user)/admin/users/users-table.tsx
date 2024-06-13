import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import {
  Chip,
  Dropdown,
  IconButton,
  ListDivider,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
} from "@mui/joy";
import More from "@/assets/icons/More";
import Edit from "@/assets/icons/Edit";
import Delete from "@/assets/icons/Delete";

function createData(
  name: string,
  email: string,
  role: string,
  phone: string,
  j_date: string,
  l_date: string,
  isActive: string
) {
  return { name, email, role, phone, j_date, l_date, isActive };
}

const rows = [
  createData(
    "John Doe",
    "johndoe@email.com",
    "Admin",
    "+91 9999999999",
    "15/12/2022",
    "15/12/2024",
    "Active"
  ),
  createData(
    "John Doe",
    "johndoe@email.com",
    "Admin",
    "+91 9999999999",
    "15/12/2022",
    "15/12/2024",
    "Inactive"
  ),
  createData(
    "John Doe",
    "johndoe@email.com",
    "Admin",
    "+91 9999999999",
    "15/12/2022",
    "15/12/2024",
    "Active"
  ),
  createData(
    "John Doe",
    "johndoe@email.com",
    "Admin",
    "+91 9999999999",
    "15/12/2022",
    "15/12/2024",
    "Inactive"
  ),
];

export default function UsersTable() {
  return (
    <Sheet
      variant="outlined"
      sx={{ borderRadius: "md", width: "100%", overflowY: "auto" }}
    >
      <Table variant="plain" borderAxis="bothBetween" color="neutral" size="lg">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Joining Date</th>
            <th>Leaving Date</th>
            <th>Activity</th>
            <th style={{ width: "90px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              {/* <th scope="row">{row.name}</th> */}
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.role}</td>
              <td>{row.j_date}</td>
              <td>{row.l_date}</td>
              <td>
                <Chip
                  color={row.isActive === "Active" ? "success" : "danger"}
                  disabled={false}
                  // onClick={function () {}}
                  size="md"
                  variant="soft"
                >
                  {row.isActive}
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
                    <MenuItem>
                      <ListItemDecorator>
                        <Edit />
                      </ListItemDecorator>{" "}
                      Edit post
                    </MenuItem>
                    <MenuItem disabled>
                      <ListItemDecorator />
                      Draft post
                    </MenuItem>
                    <ListDivider />
                    <MenuItem variant="soft" color="danger">
                      <ListItemDecorator sx={{ color: "inherit" }}>
                        <Delete />
                      </ListItemDecorator>{" "}
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
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </Table>
    </Sheet>
  );
}
