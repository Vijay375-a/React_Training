import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //add window resize listener
        window.addEventListener('resize', handleResize)
        //clean up code
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    return width;
}
export { useWindowWidth };
