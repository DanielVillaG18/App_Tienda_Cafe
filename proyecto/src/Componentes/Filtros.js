import React from 'react';

function Filters({ onFilterChange }) {
  return (
    <div>
      <h3>Filtros</h3>
      <select onChange={(e) => onFilterChange('tipo', e.target.value)}>
        <option value="">Seleccionar Tipo</option>
        <option value="Arabica">Arabica</option>
        <option value="Robusta">Robusta</option>
      </select>
    </div>
  );
}

export default Filters;