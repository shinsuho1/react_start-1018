import React from "react";
import Layout from "../common/Layout";
import { useState, useEffect } from "react";
import axios from 'axios'
function Department() {

    // const [selectedTab, setselectedTab] = useState(selectedMenu || "menu1");
    // const handlingTab = (menu) => {
    //     setselectedTab(menu);
    // }
    const path = process.env.PUBLIC_URL;
    const [Members, setMembers] = useState([]);
    const [Colors, setColors] = useState([]);

    useEffect(() => {
        axios.get(process.env.PUBLIC_URL + "/DB/member.json")
            .then(
                (json) => {
                    setMembers(json.data.members);
                    setColors(json.data.backGround);
                }
            )

    }, [])

    return (
        <Layout name={"Department"}>
            {/* <main>
                <nav>
                    <h1>TAB</h1>
                    <ul>

                        <li className={selectedTab === "menu1" ? "on" : ""}
                            onClick={() => handlingTab("menu1")}>menu1
                        </li>
                        <li className={selectedTab === "menu2" ? "on" : ""}
                            onClick={() => handlingTab("menu2")}>menu2
                        </li>
                        <li className={selectedTab === "menu3" ? "on" : ""}
                            on Click={() => handlingTab("menu3")}>menu3
                        </li>
                        <li className={selectedTab === "menu4" ? "on" : ""}
                            onClick={() => handlingTab("menu4")}>menu4
                        </li>
                    </ul>
                </nav>
                <section>
                    <article className={selectedTab === "menu1" ? "on" : ""}>
                        1
                    </article>
                    <article className={selectedTab === "menu2" ? "on" : ""}>
                        2
                    </article>
                    <article className={selectedTab === "menu3" ? "on" : ""}>
                        3
                    </article>
                    <article className={selectedTab === "menu4" ? "on" : ""}>
                        4
                    </article>
                </section>
            </main> */}
            {Members.map((el) =>
                <article key={el.name}>
                    <div className="inner">
                        <div className="picFrame">
                            <div className="pic">
                                <img src={`${path}/img/${el.pic}`} alt={`${el.name}`} />
                            </div>
                            <div className="reflect">
                                <img src={`${path}/img/${el.pic}`} alt={`${el.name}`} />
                            </div>
                        </div>

                        <h2>{el.name}</h2>
                        <p>{el.position}</p>
                    </div>
                </article>
            )}

        </Layout>
    );
}

export default Department;

/*
axios vs fetch

aaxios
axios는 설치가 필요하며, 보안기능을 제공한다
자동으로 JSON데이터 변환을 지원합니다
http요청을 기본적으로 제공합니다
다운로드 프로세스를 지원합니다

fetch
설치가 필요없으며, 보안기능 또한 없음.
수동으로 json데이터를 변환해야하며, 
http요청을 제공하지 않고, 다운로드 프로세스도 지원하지 않는다

*/

/*
SSR VS CSR
웹 페이지 렌더링 방식에 대한 개념

SPA vs MPA

SPA(Single Page Application)
MPA(Multi Page Application)

웹 애플리케이션의 구조와 페이지 전환 방식에 대한 개념

SPA는 한개의 html페이지만 가지며, 필요한 콘텐츠는 동적으로 JS를 통해서 로드를 합니다
이후 사용자와의 상호작용에 따라서 페이지를 새로고칩없이 동적으로만 업데이트를 합니다 → REACT

MPA는 전통적인 웹 애플리케이션 방식입니다
각각의 페이지마다 고유한 URL을 부여하며, 사용자 요청에 따라서 새로운 페이지를 전달하는 방식입니다

리액트는 CSR의 렌더링 방식으로 SPA의 구조와 페이지 전환 방식으로 구현된 웹어플리케이션을 만드는 도구입니다

SSR을 사용하는 SPA가 있습니다
NEXT.js라는 리액트 기반 SSR지원하는 프레임워크입니다

MPA - CSR 덧입하는것 - 블로그 포스팅
상품 목폭페이지는 전통적인 SSR을 가져오지만 필터링을 하거나 정렬할 때는 동적으로만 하도록 CSR를 덧붙이는 하이브리드로 사용하기도 합니다


*/
