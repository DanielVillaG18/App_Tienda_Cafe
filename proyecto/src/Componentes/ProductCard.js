import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {Card,CardContent,Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box, } from "@mui/material";
import { useCart } from "../Contextos/CartContext"; // Importa el contexto del carrito
 
function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
 
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto del carrito
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
 
  const handleAddToCart = () => {
    // Agrega el producto al carrito con la cantidad seleccionada
    addToCart({ ...product, quantity });
    setOpen(false); // Cierra el diálogo después de agregar al carrito
  };
 
  return (
    <>
      <Card
        sx={{
          height: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <img
          src={product.images?.[0] || product.image}
          alt={product.name}
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" noWrap>
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
          >
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            ${product.price}
          </Typography>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ mt: 2 }}>
            Ver Detalles
          </Button>
        </CardContent>
      </Card>
 
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
  <DialogTitle>{product.name}</DialogTitle>
  <DialogContent>
    <Box sx={{ maxWidth: "500px", margin: "0 auto" }}>
      <Slider {...settings}>
        {(product.images || [product.image]).map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Imagen ${idx + 1}`}
              style={{
                maxWidth: "500px",
                maxHeight: "300px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                margin: "0 auto",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
 
    <Typography variant="body1" sx={{ mt: 2 }}>
      {product.description}
    </Typography>
 
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Typography variant="h5" sx={{ color: "green" }}>
        ${product.price}
      </Typography>
 
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="subtitle1">Cantidad:</Typography>
        <TextField
          type="number"
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, parseInt(e.target.value) || 1))
          }
          size="small"
          sx={{ width: "80px" }}
          inputProps={{ min: 1 }}
        />
      </Box>
    </Box>
  </DialogContent>
 
  <DialogActions>
    <Button onClick={() => setOpen(false)} color="primary">
      Cerrar
    </Button>
    <Button
      component={Link}
      to="/Carrito"
      variant="contained"
      color="primary"
      onClick={handleAddToCart}
    >
      Agregar al Carrito
    </Button>
  </DialogActions>
</Dialog>
 
    </>
  );
}
 
export default ProductCard;
 