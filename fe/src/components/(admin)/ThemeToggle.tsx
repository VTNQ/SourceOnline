"use client";
import { useEffect, useState } from "react";

function getCookie(name: string) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

function setCookie(name: string, value: string) {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = getCookie("theme");
        if (saved === "dark") {
            setIsDark(true);
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            setCookie("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            setCookie("theme", "light");
        }
    };

    if (!mounted) return <button className="p-2 w-10 h-10" />;

    return (
        <button
            onClick={toggle}
            className="relative z-50 p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
            <span className="material-symbols-outlined text-[24px]">
                {isDark ? "light_mode" : "dark_mode"}
            </span>
        </button>
    );
}