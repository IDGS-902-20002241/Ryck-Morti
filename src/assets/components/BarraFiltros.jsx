
import PropTypes from "prop-types";
import "../styles/FilterBar.css";

function FilterBar({ tipos, tipoActivo, onSeleccionar }) {
  return (
    <>
    <section className="filter_bar">
      <span className="filter_head"> Filtrar(Buscar)     por:</span>

      <div className="filter_options">
        <button type="button" className={`filter_button ${tipoActivo === "Todos" ? "active" : ""}`} onClick={() => onSeleccionar("Todos")}>Todos</button>

        {tipos.filter((tipo) => tipo !== "Todos").map((tipo) => (
          <button
            type="button"  key={tipo} className={`filter_button ${tipoActivo === tipo ? "active" : ""}`} onClick={() => onSeleccionar(tipo)} >{tipo}</button>
        ))}
      </div>
    </section>
    </>
  );
}

FilterBar.propTypes = {
  tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
  tipoActivo: PropTypes.string.isRequired,
  onSeleccionar: PropTypes.func.isRequired,
};

export default FilterBar;
