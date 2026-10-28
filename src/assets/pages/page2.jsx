import CharacterList from "../components/CharacterList2";
import { useCharacteres } from "../../useCharacters"; 

export default function PageTwo() {
      
      const { characters, loading, error } = useCharacteres("Todos");

  const charactersFiltrados = characters.filter(
    (character) => character.gender === "Female",
  );

  return (
    <>
      
            {loading && <p>Cargando...</p>}
      
            {error && <p role="alert">Ocurrió un error: {error}</p>}
      
            {!loading && !error && (
              <>
                <h2>Resultados ({charactersFiltrados.length})</h2>
      
                <CharacterList characters={charactersFiltrados} />
      
                {charactersFiltrados.length === 0 && (
                  <p>No se encontraron personajes.</p>
                )}
              </>
            )}
      
      {charactersFiltrados.length === 0 && <p>No se encontraron personajes.</p>}
    </>
  );
}
