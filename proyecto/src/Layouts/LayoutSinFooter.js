import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const LayoutSinFooter = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flex="1">
        <Outlet />
      </Box>
    </Box>
  );
};

export default LayoutSinFooter;
