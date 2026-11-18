import { useEffect, useState } from "react";
import type { Preferences } from "../types";

const key = "pulso.preferences";
function load(): Preferences {
  const defaults: Preferences = { theme: "dark", period: 7 };
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(key) ?? "{}");
    if (!saved || typeof saved !== "object") return defaults;
    if ("theme" in saved && (saved.theme === "light" || saved.theme === "dark")) defaults.theme = saved.theme;
    if ("period" in saved && (saved.period === 7 || saved.period === 30 || saved.period === 90)) defaults.period = saved.period;
  } catch { /* Keep the defaults when storage is unavailable. */ }
  return defaults;
}

export function usePreferences() {
  const [preferences, setPreferences] = useState(load);
  useEffect(() => {
    document.documentElement.dataset.theme = preferences.theme;
    try { localStorage.setItem(key, JSON.stringify(preferences)); }
    catch { /* Preferences remain in memory during this visit. */ }
  }, [preferences]);
  return { preferences, setPreferences };
}
