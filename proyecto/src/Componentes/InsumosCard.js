import React, { useState } from "react";
import Slider from "react-slick";
import {Card,CardContent,Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box,} from "@mui/material";
import { useCart } from "../Contextos/CartContext";
 
function InsumosCard({ insumo }) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
 
  const { addToCart } = useCart();
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
 
  return (
    <>
      <Card sx={{ maxWidth: 345, m: "auto" }}>
        <img
          src={insumo.images?.[0] || insumo.image}
          alt={insumo.name}
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h6">{insumo.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {insumo.description}
          </Typography>
          <Typography variant="h6">${insumo.price}</Typography>
          <Button onClick={() => setOpen(true)} variant="contained" fullWidth>
            Ver Detalles
          </Button>
        </CardContent>
      </Card>
 
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{insumo.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ maxWidth: "500px", margin: "0 auto" }}>
            <Slider {...settings}>
              {(insumo.images || [insumo.image]).map((img, idx) => (
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
            {insumo.description}
          </Typography>
 
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="h5" sx={{ color: "green" }}>
              ${insumo.price}
            </Typography>
 
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="subtitle1">Cantidad:</Typography>
              <TextField
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                size="small"
                sx={{ width: "80px" }}
                inputProps={{ min: 1 }}
              />
            </Box>
          </Box>
        </DialogContent>
 
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cerrar
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "auto",
              padding: "6px 16px",
              fontSize: "0.875rem",
            }}
            onClick={() => {
              addToCart({ ...insumo, quantity });
              setOpen(false);
            }}
          >
            Agregar al Carrito
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
 
export default InsumosCard;