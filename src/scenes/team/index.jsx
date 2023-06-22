import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import { LockOpenOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import { SecurityOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
  ];

  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
