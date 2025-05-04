import { Box, Typography } from "@mui/material";
import { Instagram, Facebook, WhatsApp } from "@mui/icons-material";

const Footer = () => {

  return (
    <Box sx={{ p: 2, textAlign: "center", backgroundColor: "hsla(0, 0%, 0%, 0.90)", color: "white" }}>
      <Typography variant="h5">
          Sobre Nosotros
      </Typography>

      <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
        <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <Instagram sx={{ 
            fontSize: { xs: 30, sm: 40, md: 30 }, 
            color: "white", 
            backgroundColor: "#E4405F", 
            borderRadius: "50%", 
            padding: 1 
          }} />
        </a>
        <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <Facebook sx={{ 
            fontSize: { xs: 30, sm: 40, md: 30 }, 
            color: "white", 
            backgroundColor: "#1877F2", 
            borderRadius: "50%", 
            padding: 1 
          }} />
        </a>
        <a href="https://wa.me/tuNumero" target="_blank" rel="noopener noreferrer">
          <WhatsApp sx={{ 
            fontSize: { xs: 30, sm: 40, md: 30 }, 
            color: "white", 
            backgroundColor: "#25D366", 
            borderRadius: "50%", 
            padding: 1 
          }} />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
