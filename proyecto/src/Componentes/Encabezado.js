import React from "react";
import { Box, Button, IconButton, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/Delirio_Coffee2.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../Contextos/CartContext";

function Encabezado() {
  const { cart } = useCart();
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: { xs: 1, md: 0 } }}>
        <Link to="/">
          <img
            src={logo}
            alt="Delirio Coffee Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
      </Box>

      {/* Botones */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1,
          justifyContent: { xs: "center", md: "flex-end" },
          width: { xs: "100%", md: "auto" },
          overflowX: "auto",
          maxWidth: "100%", 
          paddingX: 1,
        }}
      >
        <Button component={Link} to="/productos" variant="contained" color="primary" sx={{ px: 2 }}>
          Productos
        </Button>
        <Button component={Link} to="/insumos" variant="contained" color="primary" sx={{ px: 2 }}>
          Insumos
        </Button>
        <Button component={Link} to="/proveedores" variant="contained" color="primary" sx={{ px: 2 }}>
          Proveedores
        </Button>
        <Button component={Link} to="/login" variant="contained" color="primary"sx={{ px: 2 }} > 
          Iniciar Sesión
        </Button>

        {/* Carrito */}
        <IconButton component={Link} to="/carrito" color="primary"sx={{ px: 4 }}>
          <Badge badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)} color="error" showZero>
            <ShoppingCartIcon fontSize="medium"/>
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Encabezado;

