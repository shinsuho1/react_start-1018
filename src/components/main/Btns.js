
import { useEffect, useRef } from "react";

function Btns() {
    const btnRef = useRef(null);
    const pos = useRef([]);
    const getPos = () => {
        pos.current = [];
        const sections = btnRef.current.parentElement.querySelectorAll(".myScroll");
        const sectionsArr = Array.from(sections);
        sectionsArr.map((el, inex) => {
            pos.current.push(el.offsetTop);
        })
    }

    const activation = () => {
        const btns = btnRef.current.children;
        const sections = btnRef.current.parentElement.querySelectorAll(".myScroll");
        const scroll = window.scrollY;
        const base = -window.innerHeight / 3;
        const sectionsArr = Array.from(sections);
        sectionsArr.map((el, index) => {
            if (scroll >= pos.current[index] + base) {
                for (let i = 0; i < 4; i++) {
                    btns[i].classList.remove("on");
                    sections[i].classList.remove("on");
                }
                btns[index].classList.add("on");
                sections[index].classList.add("on");
            }

        });
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        getPos();
        window.addEventListener("resize", getPos);
        window.addEventListener("scroll", activation);
        return () => {
            window.removeEventListener("resize", getPos);
            window.removeEventListener("scroll", activation);

        }

    }, []);

    return (
        <ul className="scroll_navi" ref={btnRef}>
            <li className="on"></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
}

export default Btns