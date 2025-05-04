import React, { useState } from "react";
import { Box, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ProductCard from "../Componentes/ProductCard";
import products from "../Componentes/productoServicio";
import SearchBar from "../Componentes/Barradebusqueda";

function PaginaProductos() {
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  // Filtrar productos por búsqueda y ordenamiento
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filter === "az") return a.name.localeCompare(b.name);
    if (filter === "za") return b.name.localeCompare(a.name);
    if (filter === "lowToHigh") return a.price - b.price;
    if (filter === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <Box 
      sx={{ 
        backgroundColor: "#E6C8A1", 
        color: "white",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      {/* Contenedor del Filtro */}
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: 'center', justifyContent: { xs: "center", md: "space-between" }, gap: 2, marginBottom: "20px" }}>
        <SearchBar onSearch={handleSearch} />
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel sx={{ color: "white" }}>Ordenar por</InputLabel>
          <Select 
            value={filter} 
            onChange={handleFilterChange}
            sx={{ color: "white", backgroundColor: "#424242" }}
          >
            <MenuItem value="">Ninguno</MenuItem>
            <MenuItem value="az">A-Z</MenuItem>
            <MenuItem value="za">Z-A</MenuItem>
            <MenuItem value="lowToHigh">Precio: Menor a Mayor</MenuItem>
            <MenuItem value="highToLow">Precio: Mayor a Menor</MenuItem>
          </Select>
        </FormControl>
      </Box>


      {/* Grid de productos */}
      <Grid container spacing={3}>
        {sortedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box> 
  );
}

export default PaginaProductos;
