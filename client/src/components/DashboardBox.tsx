import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "4px 4px 13px -3px rgba(0,0,0,0.7);"
}))

export default DashboardBox;