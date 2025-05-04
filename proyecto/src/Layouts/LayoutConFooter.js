import { Box } from "@mui/material";
import Footer from "../Componentes/Footer";
import { Outlet } from "react-router-dom";

const LayoutConFooter = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutConFooter;
