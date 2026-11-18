import { useEffect, useState } from "react";

export function useDemoLoad() {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const simulateError = new URLSearchParams(location.search).get("demo") === "error";
    const timer = window.setTimeout(() => {
      setState(simulateError && attempt === 0 ? "error" : "ready");
    }, 320);
    return () => window.clearTimeout(timer);
  }, [attempt]);

  function reload() {
    setState("loading");
    setAttempt((value) => value + 1);
  }
  return { state, reload };
}
