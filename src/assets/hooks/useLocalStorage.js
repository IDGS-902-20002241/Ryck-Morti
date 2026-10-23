
import { useState } from "react";

export function useRegistroClicks() {
  const [historial, setHistorial] = useState(() => {
    try {
      const guardado = localStorage.getItem("registroMovimientos");
      const datos = guardado ? JSON.parse(guardado) : [];
      return Array.isArray(datos) ? datos : [];
    } catch {
      return [];
    }
  });

  const registrarClick = (evento) => {
    const elemento = evento.target.closest(
      "button, a, [data-accion]"
    );

    if (!elemento) return;

    const descripcion =
      elemento.dataset.accion ||
      elemento.getAttribute("aria-label") ||
      elemento.textContent.trim() ||
      elemento.tagName;

    const nuevoMovimiento = {
      id: crypto.randomUUID(),
      texto: `Clic en: ${descripcion}`,
      fecha: new Date().toLocaleString(),
    };

    setHistorial((anterior) => {
      const actualizado = [nuevoMovimiento, ...anterior].slice(0, 100);

      try {
        localStorage.setItem(
          "registroMovimientos",
          JSON.stringify(actualizado)
        );
      } catch (error) {
        console.error("No se pudo guardar el historial:", error);
      }

      return actualizado;
    });
  };

  const limpiarHistorial = () => {
    setHistorial([]);
    localStorage.removeItem("registroMovimientos");
  };

  return { historial, registrarClick, limpiarHistorial };
}
    