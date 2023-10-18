import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

export default function Header({ type }) {
    const menu = useRef(null);
    const active = { color: "#000" };
    let logoURL = "";
    //삼항 연산자를 사용해 메인/서브 구분    type의 값이 main인지 물어보고 참이면 logoURL에 ./img/logo_w.png 거짓이면 ./img/logo_b.png를 넣음

    type === "main"
        ? (logoURL = "./img/logo_w.png")
        : (logoURL = "/img/logo_b.png");

    return (
        <header className={{ type }}>
            <h1>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/logo_w.png`} alt="LOGO" />
                </Link>
                <span>Here comes logo is </span>
            </h1>
            <nav id="webGnb">
                <ul id="gnb">
                    <li>
                        <NavLink to="/department" activeStyle={active}>
                            Department
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/community" activeStyle={active}>
                            Community
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" activeStyle={active}>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/youtube" activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/location" activeStyle={active}>
                            Location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/members" activeStyle={active}>
                            Members
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Menu ref={menu} />
            <FontAwesomeIcon icon={faBars} onClick={() => menu.current.toggle()} />
        </header>
    );
}
