import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { IoIosArrowDropup } from 'react-icons/io';


const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top"
            onClick={scrollToTop}
        >
            <i className="icon-scroll"><IoIosArrowDropup className='to-top-icon'/></i>
        </div>
    );
};

export default ScrollToTop;
