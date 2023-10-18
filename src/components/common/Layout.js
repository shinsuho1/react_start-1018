import { useEffect, useRef } from "react";

function Layout({ name, children }) {

    const frame = useRef(null);
    //useEffect
    useEffect(() => {
        setTimeout(() => {
            frame.current.classList.add("on");
        }, 300);
    }, []);

    return (
        <section className={`content ${name}`} ref={frame}>
            <figure>
                <img src={`${process.env.PUBLIC_URL}/img/${name}.jpg`} alt={name} />
                <h1>{name}</h1>
            </figure>
            <div className="inner">
                {children}
            </div>
        </section>
    )
}

export default Layout;