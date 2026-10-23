
import { useState } from "react";
import { useCharacteres } from "./useCharacters";
import CharacterList from "./assets/components/CharacterList2";
import Pagination from "./assets/components/Paginacion";
import FilterBar from "./assets/components/BarraFiltros";
import "./assets/styles/CharacterList2.css";
import { useRegistroClicks } from "../src/assets/hooks/useLocalStorage";

function App() {
  const [page, setPage] = useState(1);
  const [tipoActivo, setTipoActivo] = useState("Todos");
  const {
  //historial,
  registrarClick,
  // limpiarHistorial,
} = useRegistroClicks();

  // Obtener los personajes desde la API
  const {
    characters,
    totalPages,
    loading,
    error,
  } = useCharacteres(page);

  // Obtener las especies sin repetir
  const tipos = [
    ...new Set(characters.map((character) => character.species))
  ];

  // Filtrar los personajes según su especie
  const charactersFiltrados = characters.filter(
    (character) =>
      tipoActivo === "Todos" ||
      character.species === tipoActivo
  );

  return (
    <main className="app" onClickCapture={registrarClick}>
      <h1 className="head">Rick and Morty</h1>

      <FilterBar
        tipos={tipos}
        tipoActivo={tipoActivo}
        onSeleccionar={setTipoActivo}
      />

      {loading && <p>Cargando...</p>}

      {error && (
        <p role="alert">
          Ocurrió un error: {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <h2>
            Resultados ({charactersFiltrados.length})
          </h2>

          <CharacterList characters={charactersFiltrados} />

          {charactersFiltrados.length === 0 && (
            <p>No se encontraron personajes.</p>
          )}
        </>
      )}

      <Pagination
        page={page}
        totalPage={totalPages}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() =>
          setPage((p) => Math.min(totalPages, p + 1))
        }
      />
    </main>
  );
}

export default App;
