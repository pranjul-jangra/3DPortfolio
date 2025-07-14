import { useEffect, useState } from 'react'

export default function UseUpdatePageHeight() {
    const [pageInfo, setPageInfo] = useState({ totalHeight: 0, visibleHeight: 0 });

    // Update page heights
    useEffect(() => {
        const updateHeights = () => {
            setPageInfo({
                totalHeight: document.documentElement.scrollHeight,
                visibleHeight: window.innerHeight,
            });
        };

        updateHeights();
        window.addEventListener("resize", updateHeights);
        return () => window.removeEventListener("resize", updateHeights);
    }, []);

    return pageInfo;
}
