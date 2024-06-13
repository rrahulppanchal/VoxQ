import Add from "@/assets/icons/Add";
import Filter from "@/assets/icons/Filter";
import SearchUser from "@/assets/icons/SearchUser";
import { Box, Button, Divider, Input, Typography } from "@mui/joy";
import UsersTable from "./users-table";
import OperationsActionsModal from "./operations-actions-modal";

export default function Users() {
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

          <OperationsActionsModal />
        </Box>
        <Divider />
        <Box
          sx={{
            m: 2,
          }}
        >
          <UsersTable />
        </Box>
      </Box>
    </>
  );
}
