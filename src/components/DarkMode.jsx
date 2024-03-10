"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const DarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-lg cursor-pointer hover:purple-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-lg cursor-pointer hover:purple-500"
          />
        ))}
    </div>
  );
};

export default DarkMode;
