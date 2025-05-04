import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const Informacion = () => {
  return (
    <>
      {/* Video Hero */}
      <Box sx={{ position: 'relative', overflow: 'hidden', height: '60vh' }}>
        <video 
          autoPlay 
          muted 
          loop 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }}
        >
          <source src="Videos/delirio-cafe.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* Fondo de la página */}
      <Box sx={{ backgroundColor: "#E6C8A1", minHeight: "100vh" }}>
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Sobre Delirio Coffee
          </Typography>

          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Unimos a los mejores caficultores y exportadores para llevar la esencia del café colombiano al mundo.
          </Typography>

          {/* Sección Quienes Somos */}
          <Box sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom>¿Quiénes Somos?</Typography>
            <Typography paragraph>
              Delirio Coffee es una empresa dedicada a potenciar el comercio del café en Colombia,
              ofreciendo oportunidades a los pequeños y grandes caficultores para expandir sus productos
              tanto a nivel nacional como internacional.
            </Typography>
          </Box>

          {/* Sección Exportación/Importación */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Exportación de Café</Typography>
                  <Typography paragraph>
                    Nuestro café viaja a diferentes rincones del mundo, destacando por su sabor único
                    y procesos de producción responsables.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Importación de Insumos</Typography>
                  <Typography paragraph>
                    Facilitamos la importación de herramientas y recursos agrícolas de alta calidad
                    para los caficultores colombianos.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Beneficios para proveedores */}
          <Box sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom>Beneficios para Proveedores</Typography>
            <Typography paragraph>
              Nos enfocamos en fortalecer la relación con proveedores de confianza, garantizando pagos justos,
              capacitaciones y acceso a mercados internacionales.
            </Typography>
          </Box>

          {/* Frase final */}
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Typography variant="h4" gutterBottom>
              "El futuro del café colombiano empieza con un Delirio por su sabor."
            </Typography>

            <Button variant="contained" color="primary" href="/productos">
              Ver Nuestros Productos
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Informacion;
