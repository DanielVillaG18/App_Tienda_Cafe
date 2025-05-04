import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import products from "../Componentes/productoServicio";
import { useCart } from "../Contextos/CartContext"; // Importar el contexto del carrito

function DetallesProductos() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useCart(); // Obtener la función para agregar productos al carrito

  if (!product) return <Typography variant="h5">Producto no encontrado</Typography>;

  const handleAddToCart = () => {
    addToCart(product); // Llamar a la función addToCart al hacer clic
  };

  return (
    <Box sx={{ p: 3 }}>
      <CardMedia component="img" height="300"  image={product.images[0]} alt={product.name} />
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h5">${product.price}</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{     height: 300,
    width: "100%",
    maxWidth: 400,
    objectFit: "contain", // Usa "cover" si prefieres recorte con fondo lleno
    marginBottom: 2,
    borderRadius: 2,
    boxShadow: 2}}
        onClick={handleAddToCart} // Vincular la función al evento onClick
      >
        Agregar al Carrito
      </Button>
    </Box>
  );
}

export default DetallesProductos;
