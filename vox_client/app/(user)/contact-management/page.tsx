"use client";
import * as React from "react";
import Add from "@/assets/icons/Add";
import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
  tabClasses,
} from "@mui/joy";
import Inactive from "./in-active";
import Filter from "@/assets/icons/Filter";

export default function ContactManagement() {
  return (
    <>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ px: { xs: 2, md: 2 } }}>
          <Typography level="h2" component="h1" sx={{ pt: 1, mb: 2 }}>
            Contact Management
          </Typography>
        </Box>
        <Box
          sx={{
            m: 2,
            p: 2,
            borderRadius: "md",
            display: "flex",
            textAlign: "end",
            justifyContent: "end",
            alignItems: "flex-end",
            background: "#fb923c1a",
            border: "1px solid #fb923c5c",
            gap: 2,
          }}
        >
          <Button endDecorator={<Filter />}>Filter</Button>
          <Button startDecorator={<Add />}>Add Contact</Button>
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
