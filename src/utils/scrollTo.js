import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTo = () => {
    const { pathname } = useLocation(); // 페이지가 바뀌는 것을 감지

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}

export default ScrollTo;