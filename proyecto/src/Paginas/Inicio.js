import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Sección de Bienvenida */}
      <Box sx={{ p: 3, textAlign: "center", backgroundColor: "#E6C8A1", color: "black" }}>
        <Typography variant="h4" fontWeight="bold">Bienvenido a Delirio Coffee</Typography>
        <Typography variant="h6" sx={{ maxWidth: "600px", margin: "auto" }}>
          Pasión en cada sorbo, calidad en cada grano.
        </Typography>
      </Box>

      {/* Imagen decorativa */}
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundImage: "url('/Imagenes/img1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Sección de Información */}
      <Box sx={{ p: 3, textAlign: "center", backgroundColor: "#E6C8A1", color: "black" }}>
        <Typography variant="h4" fontWeight="bold">¿Cómo funciona nuestra tienda?</Typography>
        <Typography variant="h6" sx={{ maxWidth: "700px", margin: "auto" }}>
          En Delirio Coffee ofrecemos una experiencia única de compra de café. Puedes explorar nuestros productos, personalizar tu selección y realizar compras seguras con entrega rápida.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button component={Link} to="/productos" variant="contained" color="primary">
            Ver Productos
          </Button>
          <Button component={Link} to="/Insumos" variant="contained" color="primary">
            Ver Insumos
          </Button>
        </Box>
      </Box>

      {/* Sección de Productos */}
      <Grid container spacing={2} sx={{ p: 3, backgroundColor: "#E6C8A1" }}>
        {[
          { img: "/Imagenes/Bolsita1.jpeg", title: "Café Premium", desc: "Variedades seleccionadas con los mejores granos de Colombia." },
          { img: "/Imagenes/Productos3.jpeg", title: "Productos Variados", desc: "Encuentra todo lo que necesitas para preparar un café perfecto." },
          { img: "/Imagenes/Productos2.jpeg", title: "Insumos Agrícolas", desc: "Fertilizantes, herramientas y todo lo necesario para el cultivo del café." }
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: "10px", boxShadow: 2 }}>
              <CardMedia component="img" height="180" image={item.img} alt={item.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ p: 3, textAlign: "center", backgroundColor: "#E6C8A1" }}>
      <Typography variant="h4" fontWeight="bold">¿Te gustaria saber mas sobre el Café?</Typography>
      <Button component={Link} to="/Informacion" variant="contained" color="primary" sx={{ mt: 2 }}>
          Informacion del Café
      </Button>
      </Box>

      {/* Sección de Promociones */}
      <Box sx={{ p: 3, textAlign: "center", backgroundColor: "#E6C8A1" }}>
        <Typography variant="h4" fontWeight="bold">¡Promociones Especiales!</Typography>
        <Typography variant="h6" sx={{ maxWidth: "600px", margin: "auto" }}>
          Regístrate hoy y recibe un 10% de descuento en tu primera compra.
        </Typography>
        <Button component={Link} to="/InicioSesion" variant="contained" color="primary" sx={{ mt: 2 }}>
          Registrarse Ahora
        </Button>
      </Box>
    </>
  );
}

export default Home;