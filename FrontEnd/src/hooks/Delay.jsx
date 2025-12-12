import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Delay = (delay = 1500) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const delayedNavigate = (e, path) => {
    if (e?.preventDefault) e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate(path);
    }, delay);
  };

  return { delayedNavigate, loading };
}

/*  const { delayedNavigate, loading } = Delay();

<button onClick={(e) => delayedNavigate(e, "/dashboard")}>
      {loading ? "Carregando..." : "Ir para Dashboard"}
    </button> */