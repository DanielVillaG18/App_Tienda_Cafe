import React, { useState } from "react";
import { TextField, Button, MenuItem, Typography, Box } from "@mui/material";

const Pago = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    email: "",
    banco: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de validación o redirección
    console.log("Datos del formulario:", formData);
    alert("Redirigiendo a la pasarela de pago PSE...");
  };

  return (
    <Box sx={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Pago con PSE
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre completo"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Cédula"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          select
          fullWidth
          label="Banco"
          name="banco"
          value={formData.banco}
          onChange={handleChange}
          required
          margin="normal"
        >
          <MenuItem value="">Selecciona tu banco</MenuItem>
          <MenuItem value="bancolombia">Bancolombia</MenuItem>
          <MenuItem value="davivienda">Davivienda</MenuItem>
          <MenuItem value="nequi">Nequi</MenuItem>
          <MenuItem value="bbva">BBVA</MenuItem>
        </TextField>
        
        <TextField
          fullWidth
          label="Numero de Tarjeta"
          name="Tarjeta"
          value={formData.Tarjeta}
          onChange={handleChange}
          required
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          fullWidth
        >
          Proceder al pago
        </Button>
      </form>
    </Box>
  );
};

export default Pago;
