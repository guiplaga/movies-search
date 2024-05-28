import { useState } from "react";

export const useError = () => {
  const [error, setError] = useState("");

  const filterError = (input: string) => {
    if (input === "") {
      setError("No se admite texto vacío");
      return;
    }

    if (input.match(/^d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (input.length < 3) {
      setError("La búsqueda debe contener al menos 3 carácteres");
      return;
    }

    setError("");
  };

  return { error, filterError };
};
