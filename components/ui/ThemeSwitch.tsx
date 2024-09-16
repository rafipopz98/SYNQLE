"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={24}
        height={24}
        sizes="24x24"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  return (
    <div className="flex items-center space-x-1 rounded-full border">
      <button
        onClick={() => setTheme("light")}
        className={`rounded-full p-2 transition-colors ${
          theme === "light" ? "bg-gray-200 shadow-md" : "text-gray-500"
        }`}
      >
        <Sun size={15} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`rounded-full p-2 transition-colors ${
          theme === "system" ? "bg-gray-800 shadow-md" : "text-gray-500"
        }`}
      >
        <Monitor size={15} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full p-2 transition-colors ${
          theme === "dark" ? "bg-gray-800 shadow-md" : "text-gray-500"
        }`}
      >
        <Moon size={15} />
      </button>
    </div>
  );
}
