import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

const Nav = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }    

    return (
        <nav className="bg-gray-400 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center">
                    The current theme is: {theme}
                    <button onClick={() => setTheme("light")}>Light Mode</button>
                    <button onClick={() => setTheme("dark")}>Dark Mode</button>
                </div>
            </div>
        </nav>
    )
};

export default Nav;