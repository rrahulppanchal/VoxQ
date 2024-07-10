"use client";
import * as React from "react";
import Add from "@/assets/icons/Add";
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  ChipDelete,
  Divider,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Sheet,
  Snackbar,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
  tabClasses,
  useColorScheme,
} from "@mui/joy";
import Inactive from "./in-active";
import Filter from "@/assets/icons/Filter";
import { DownArrow } from "@/assets/icons/Arrow";
import Close from "@/assets/icons/Close";
import ContactTable from "./contact-table";
import ContactActionModal from "./contact-action-modal";
import SingleContactActionModal from "./single-contact-action-modal";
import SearchUser from "@/assets/icons/SearchUser";

const options = ["Add Contact", "Add multiple contacts", "Import contacts"];

export default function ContactManagement() {
  const { mode } = useColorScheme();
  const actionRef = React.useRef<() => void | null>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isModalSingleOpen, setModalSingleOpen] = React.useState(false);

  const handleClick = () => {
    if (options[selectedIndex] === "Add multiple contacts") {
      setModalOpen(true);
    }
    if (options[selectedIndex] === "Add Contact") {
      setModalSingleOpen(true);
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  return (
    <>
      <Sheet>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ px: { xs: 2, md: 2 } }}>
            <Typography level="h2" component="h1" sx={{ pt: 1, mb: 2 }}>
              Contact Management
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              m: 2,
              p: 0,
              borderRadius: "md",
              display: "flex",
              textAlign: "end",
              justifyContent: "end",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Input
              color="neutral"
              variant="outlined"
              placeholder="Search..."
              startDecorator={<SearchUser />}
              endDecorator={<Button color="neutral">Search</Button>}
            />
            <IconButton
              color="neutral"
              variant="outlined"
              onClick={() => setOpenFilter(true)}
            >
              <Filter />
            </IconButton>
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
                invertedColors
                color="neutral"
                variant="plain"
                placement="bottom-end"
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
          <Box padding={2} paddingTop={0}>
            <Stack
              marginBottom={1}
              padding={1}
              borderRadius="8px"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={1}
              border={
                mode === "dark"
                  ? "1px solid var(--mui-palette-grey-800)"
                  : "1px solid var(--mui-palette-grey-300)"
              }
            >
              <Chip
                variant="solid"
                color="neutral"
                size="lg"
                endDecorator={<ChipDelete onDelete={() => alert("Delete")} />}
                onClick={() => alert("You clicked the Joy Chip!")}
              >
                By Name
              </Chip>
              <Chip
                variant="solid"
                color="neutral"
                size="lg"
                endDecorator={<ChipDelete onDelete={() => alert("Delete")} />}
                onClick={() => alert("You clicked the Joy Chip!")}
              >
                John
              </Chip>
              <Chip
                variant="solid"
                color="neutral"
                size="lg"
                endDecorator={<ChipDelete onDelete={() => alert("Delete")} />}
                onClick={() => alert("You clicked the Joy Chip!")}
              >
                Filtered by Name
              </Chip>
              <Chip
                variant="solid"
                color="neutral"
                size="lg"
                endDecorator={<ChipDelete onDelete={() => alert("Delete")} />}
                onClick={() => alert("You clicked the Joy Chip!")}
              >
                Filtered by area
              </Chip>
              <Chip
                variant="solid"
                color="neutral"
                size="lg"
                endDecorator={<ChipDelete onDelete={() => alert("Delete")} />}
                onClick={() => alert("You clicked the Joy Chip!")}
              >
                Filtered by area
              </Chip>
            </Stack>

            <ContactTable />
          </Box>
          {/* <Box marginTop={2}>
          <Tabs
            defaultValue={0}
            sx={{
              bgcolor: "transparent",
            }}
          >
            <TabList
              tabFlex={1}
              size="sm"
              sx={{
                pl: { xs: 0, md: 4 },
                justifyContent: "left",
                [`&& .${tabClasses.root}`]: {
                  fontWeight: "600",
                  flex: "initial",
                  color: "text.tertiary",
                  [`&.${tabClasses.selected}`]: {
                    bgcolor: "transparent",
                    color: "text.primary",
                    "&::after": {
                      height: "2px",
                      bgcolor: "primary.500",
                    },
                  },
                },
              }}
            >
              <Tab
                sx={{ borderRadius: "6px 6px 0 0" }}
                indicatorInset
                value={0}
              >
                Active
              </Tab>
              <Tab
                sx={{ borderRadius: "6px 6px 0 0" }}
                indicatorInset
                value={1}
              >
                Inactive
              </Tab>
              <Tab
                sx={{ borderRadius: "6px 6px 0 0" }}
                indicatorInset
                value={2}
              >
                Pending
              </Tab>
              <Tab
                sx={{ borderRadius: "6px 6px 0 0" }}
                indicatorInset
                value={3}
              >
                Billing
              </Tab>
            </TabList>
            <TabPanel value={0}>
              <Inactive />
            </TabPanel>
            <TabPanel value={1}>
              <Inactive />
            </TabPanel>
            <TabPanel value={2}>
              <Inactive />
            </TabPanel>
            <TabPanel value={3}>
              <Inactive />
            </TabPanel>
            <TabPanel value={4}>
              <Inactive />
            </TabPanel>
          </Tabs>
        </Box> */}
        </Box>
        <Snackbar
          // autoHideDuration={50000}
          variant="outlined"
          color="neutral"
          size="lg"
          invertedColors
          open={openFilter}
          onClose={() => setOpenFilter(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          sx={(theme) => ({
            background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
            maxWidth: 460,
          })}
        >
          <div>
            <Typography level="title-lg">Filter</Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Are you sure, you want to leave this page without confirming your
              order?
            </Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Are you sure, you want to leave this page without confirming your
              order?
            </Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Are you sure, you want to leave this page without confirming your
              order?
            </Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Are you sure, you want to leave this page without confirming your
              order?
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button
                sx={{ width: "100%", borderRadius: "50vw" }}
                variant="outlined"
                color="neutral"
                onClick={() => setOpenFilter(false)}
                startDecorator={<Close />}
              >
                Cancel
              </Button>
              <Button
                sx={{ width: "100%", borderRadius: "50vw" }}
                variant="solid"
                color="neutral"
                onClick={() => setOpenFilter(false)}
                startDecorator={<Filter />}
              >
                Filter
              </Button>
            </Stack>
          </div>
        </Snackbar>
        <ContactActionModal
          isModalOpen={isModalOpen}
          setModalOpen={function (value: React.SetStateAction<boolean>): void {
            setModalOpen(!isModalOpen);
          }}
        />
        <SingleContactActionModal
          isModalOpen={isModalSingleOpen}
          setModalOpen={function (value: React.SetStateAction<boolean>): void {
            setModalSingleOpen(!isModalSingleOpen);
          }}
        />
      </Sheet>{" "}
    </>
  );
}
