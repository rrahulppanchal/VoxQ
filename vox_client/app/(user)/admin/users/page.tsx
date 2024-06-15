"use client";
import Add from "@/assets/icons/Add";
import Filter from "@/assets/icons/Filter";
import SearchUser from "@/assets/icons/SearchUser";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/joy";
import UsersTable from "./users-table";
import OperationsActionsModal from "./operations-actions-modal";
import { useRef, useState } from "react";
import { DownArrow } from "@/assets/icons/Arrow";

const options = ["Add New User", "Import Users"];

export default function Users() {
  const actionRef = useRef<() => void | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [isOperationModalOpen, setOperationModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [getCurrentUserData, setCurrentUserData] = useState();

  const handleClick = () => {
    if (options[selectedIndex] === "Add New User") {
      setOperationModal(true);
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const editAction = (data: any): void | undefined => {
    setOperationModal(true);
    setCurrentUserData(data);
  };

  return (
    <>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ px: { xs: 2, md: 2 } }}>
          <Typography level="h2" component="h1" sx={{ pt: 1, mb: 2 }}>
            Admin - Users
          </Typography>
        </Box>
        <Box
          sx={{
            m: 2,
            p: 2,
            borderRadius: "md",
            display: "flex",
            textAlign: "end",
            flexWrap: "wrap",
            justifyContent: "end",
            alignItems: "flex-end",
            background: "#fb923c1a",
            border: "1px solid #fb923c5c",
            gap: 2,
          }}
        >
          <Input
            color="primary"
            variant="outlined"
            placeholder="Search..."
            startDecorator={<SearchUser />}
            endDecorator={<Button>Search</Button>}
          />
          <Button endDecorator={<Filter />}>Filter Users</Button>

          <Stack direction="row" spacing={1}>
            <ButtonGroup
              ref={anchorRef}
              variant="solid"
              color="primary"
              aria-label="split button"
            >
              <Button onClick={handleClick}>{options[selectedIndex]}</Button>
              <IconButton
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onMouseDown={() => {
                  // @ts-ignore
                  actionRef.current = () => setOpen(!open);
                }}
                onKeyDown={() => {
                  // @ts-ignore
                  actionRef.current = () => setOpen(!open);
                }}
                onClick={() => {
                  actionRef.current?.();
                }}
              >
                <DownArrow />
              </IconButton>
            </ButtonGroup>
            <Menu
              open={open}
              onClose={() => setOpen(false)}
              anchorEl={anchorRef.current}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 2}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Box>
        <Divider />
        <Box
          sx={{
            m: 2,
          }}
        >
          <UsersTable editAction={editAction} />
        </Box>
      </Box>
      <OperationsActionsModal
        currentStateData={getCurrentUserData}
        isModalOpen={isOperationModalOpen}
        setModalOpen={setOperationModal}
      />
    </>
  );
}
