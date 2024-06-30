"use client";
import * as React from "react";
import Add from "@/assets/icons/Add";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
  tabClasses,
} from "@mui/joy";
import Inactive from "./in-active";
import Filter from "@/assets/icons/Filter";
import { DownArrow } from "@/assets/icons/Arrow";

const options = ["Add Contact", "Add multiple contacts", "Import contacts"];

export default function ContactManagement() {
  const actionRef = React.useRef<() => void | null>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    if (options[selectedIndex] === "Add New User") {
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
            gap: 2,
          }}
        >
          <Button endDecorator={<Filter />}>Filter</Button>
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
        <Box marginTop={2}>
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
        </Box>
      </Box>
    </>
  );
}
