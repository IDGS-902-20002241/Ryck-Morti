
import { useEffect, useState } from "react";

const url = "https://rickandmortyapi.com/api/character";

export function useCharacteres(page) {
  // useState
  const [characters, setCharacters] = useState([]);
  const [totalPages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadingCharacteres() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${url}?page=${page}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Error al obtener los personajes");
        }

        const data = await response.json();

        setCharacters(data.results);
        setPages(data.info.pages);

      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setCharacters([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadingCharacteres();

    return () => {
      controller.abort();
    };

  }, [page]);

  return {
    characters,
    totalPages,
    loading,
    error,
  };
}
