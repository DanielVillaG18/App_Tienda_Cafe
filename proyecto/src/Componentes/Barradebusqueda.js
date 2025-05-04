import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Buscar café..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ 
          width: "40vw",  
          backgroundColor: "white", 
          borderRadius: 1 
        }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
        sx={{ height: "56px" }} 
      >
        Buscar
      </Button>
    </Box>
  );
}

export default SearchBar;
