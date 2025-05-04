import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import montañas from "../assets/montañas.jpg"; 

function Proveedores() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#E6C8A1",
      }}
    >
      <Box
        component="img"
        src={montañas}
        alt="Montañas"
        sx={{ width: "80%", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
      />

      {/* Información sobre los productos */}
      <Typography variant="h4" gutterBottom>
        Conviértete en proveedor de Delirio Coffee
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", marginBottom: "20px" }}>
        En Delirio Coffee buscamos proveedores apasionados por el café y los insumos agrícolas de calidad. 
        Si tienes un producto que encaje con nuestra filosofía de excelencia, ¡queremos conocerte!
      </Typography>

      {/* Botón para ir a iniciar sesión */}
      <Button variant="contained" color="primary" component={Link} to="/login">
        Iniciar sesión o Registrarse
      </Button>
    </Box>
  );
}

export default Proveedores;
