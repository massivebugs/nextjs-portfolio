"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeChanger(props: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className={`rounded-md text-center ${
        props.className ?? ""
      } bg-[var(--background)] text-[var(--foreground)]`}
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
