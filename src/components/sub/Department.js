import React from "react";
import Layout from "../common/Layout";

import { useSelector } from "react-redux";

function Department() {

    const path = process.env.PUBLIC_URL;
    const Members = useSelector((store) => store.memberReducer.members);
    /*
    index.js에서 Provider로 store를 App.js에 연결하였으므로 어플리케이션 전역에서 스토어에 접근이 가능합니다
    따라서 기존의 DB가 아닌 store있는 정보를 가지고오는 과저입니다
    useSelector로 store에 접근한 뒤 store에 있는 memberReducer함수에 접근합니다
    함수 안에있는 키인 members에 접근하면 reducer로 액션을 가져온 initMember가 존재하므로 기존과 같은 DB를 불러올 수 있는 것 입니다.
    */

    return (
        <Layout name={"Department"}>
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
