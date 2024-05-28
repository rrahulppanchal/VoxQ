"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { TabPanel } from "@mui/joy";
import ActiveLeadManagement from "./active";

export default function LeadManagement() {
  return (
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{
          position: "sticky",
          top: { sm: -50, md: -55, sx: -110 },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Typography level="h2" component="h1" sx={{ pt: 1, mb: 2 }}>
            Leads Management
          </Typography>
        </Box>
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
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={0}>
              Active
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={1}>
              Inactive
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={2}>
              Pending
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={3}>
              Billing
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <ActiveLeadManagement />
          </TabPanel>
          <TabPanel value={1}>
            <ActiveLeadManagement />
          </TabPanel>
          <TabPanel value={2}>
            <ActiveLeadManagement />
          </TabPanel>
          <TabPanel value={3}>
            <ActiveLeadManagement />
          </TabPanel>
          <TabPanel value={4}>
            <ActiveLeadManagement />
          </TabPanel>
        </Tabs>
      </Box>
    </Box>
  );
}
