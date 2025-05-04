import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Fade,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: 4,
          p: 4,
          width: "100%",
          maxWidth: 400,
          color: "white",
          boxShadow: 6,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          ☕ Bienvenido a Delirio Coffee
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3, color: "#bbb" }}>
          Inicia sesión para descubrir el mejor café artesanal
        </Typography>

        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: "#0000ff" } }}
        >
          <Tab label="Iniciar Sesión" />
          <Tab label="Registrarse" />
        </Tabs>

        <Fade in={tabIndex === 0}>
          <Box component="form" sx={{ mt: 3, display: tabIndex === 0 ? "block" : "none" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Correo electrónico"
              variant="filled"
              autoComplete="off"
              InputProps={{
                sx: { backgroundColor: "#2c2c2c", borderRadius: 2, color: "white" },
              }}
              InputLabelProps={{ style: { color: "#aaa" } }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Contraseña"
              variant="filled"
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              InputProps={{
                sx: { backgroundColor: "#2c2c2c", borderRadius: 2, color: "white" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword} sx={{ color: "white" }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: "#aaa" } }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#azul",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "azul" },
              }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Fade>

        <Fade in={tabIndex === 1}>
          <Box component="form" sx={{ mt: 3, display: tabIndex === 1 ? "block" : "none" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Nombre"
              variant="filled"
              autoComplete="off"
              InputProps={{
                sx: { backgroundColor: "#2c2c2c", borderRadius: 2, color: "white" },
              }}
              InputLabelProps={{ style: { color: "#aaa" } }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Correo electrónico"
              variant="filled"
              autoComplete="off"
              InputProps={{
                sx: { backgroundColor: "#2c2c2c", borderRadius: 2, color: "white" },
              }}
              InputLabelProps={{ style: { color: "#aaa" } }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Contraseña"
              variant="filled"
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              InputProps={{
                sx: { backgroundColor: "#2c2c2c", borderRadius: 2, color: "white" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword} sx={{ color: "white" }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: "#aaa" } }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#azul",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#azul" },
              }}
            >
              Registrarse
            </Button>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default LoginPage;
