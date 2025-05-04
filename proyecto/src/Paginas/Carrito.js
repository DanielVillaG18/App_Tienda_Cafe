import React from "react";
import {Box, Grid, Typography, Button, IconButton, Avatar,} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "../Contextos/CartContext";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Tu Carrito
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          El carrito está vacío.
        </Typography>
      ) : (
        <>
          <Grid container spacing={2} alignItems="center" sx={{ fontWeight: "bold", borderBottom: "1px solid #ccc", pb: 1 }}>
            <Grid item xs={2}><Typography></Typography></Grid>
            <Grid item xs={3}><Typography>Producto</Typography></Grid>
            <Grid item xs={1}><Typography>Cantidad</Typography></Grid>
            <Grid item xs={3}><Typography>Precio</Typography></Grid>
            <Grid item xs={-0.5}><Typography>Total</Typography></Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          {cart.map((item) => (
            <Grid
              container
              spacing={2}
              key={item.id}
              alignItems="center"
              sx={{ py: 2, borderBottom: "1px solid #eee" }}
            >
              <Grid item xs={2}>
              <Avatar
                variant="square"
                src={item.images?.[0] || ""}
                sx={{
                  width: 56,
                  height: 56,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(2)",
                  },
                }}
              />
              </Grid>
              <Grid item xs={3}>
                <Typography>{item.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box display="flex" alignItems="center">
                  <IconButton
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    <Remove />
                  </IconButton>
                  <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                  <IconButton
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <Add />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Typography>${item.price.toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          ))}
            <Grid container justifyContent="flex-end" alignItems="center" spacing={2} sx={{ mt: 3 }}>
              <Grid item>
                <Typography variant="h6" fontWeight="bold">
                  Total: ${total.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/pago")}
                >
                  PAGAR
                </Button>
              </Grid>
            </Grid>
        </>
      )}
    </Box>
  );
}

export default Carrito;
