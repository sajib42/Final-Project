
import { useState } from 'react';
import { useEffect } from 'react';

const DarkMode = () => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handelTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className=' min-h-screen bg-slate-500 dark:bg-black'>
            <button onClick={handelTheme}  >theme</button>
        </div>
    );
};

export default DarkMode;