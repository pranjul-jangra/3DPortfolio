import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import './ui.scss';

export default function ScrollIndicator({ totalHeight, viewportHeight }) {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const visibeTl = setTimeout(() => { setVisible(true); }, 350);
        return () => clearTimeout(visibeTl);
    }, []);

    // Condition to show arrow
    useEffect(() => {
        const checkVisibility = () => {
            const scrollTop = window.scrollY;
            const scrollBottom = scrollTop + window.innerHeight;
            const nearBottom = scrollBottom >= document.documentElement.scrollHeight - 50;

            setShow(!nearBottom && viewportHeight < totalHeight);
        };

        checkVisibility();
        window.addEventListener("scroll", checkVisibility);
        window.addEventListener("resize", checkVisibility);

        return () => {
            window.removeEventListener("scroll", checkVisibility);
            window.removeEventListener("resize", checkVisibility);
        };
    }, [totalHeight, viewportHeight]);

    // Scroll to bottom of the page
    function scrollBottom() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    // Consitional styles
    const opacity = visible ? "opacity-100" : "opacity-0";


    return (
        <>
            {show && <div onClick={(scrollBottom)} className={`${opacity} z-50 cursor-pointer fixed bottom-4 right-4 p-2 bounce bg-black text-white rounded-full transition-all duration-[1.4s] delay-150`}>
                <ArrowDown />
            </div>}
        </>
    )
}
