//import할것
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";


import Main from "./components/main/Main";

import Community from "./components/sub/Community";
import Department from "./components/sub/Department";
import Gallery from "./components/sub/Gallery";
import Location from "./components/sub/Location";
import Members from "./components/sub/Members";
import Youtube from "./components/sub/Youtube";

import "./scss/style.scss";

function App() {
    const [selectedMenu, setSelectedMenu] = useState("");
    return (
        <>
            {/* 모든 페이지에 적용되는 헤더 */}
            <Switch>
                {/* <Route exact path="/">
                    <Header type={"main"} />
                    <Main />
                </Route>
                <Route path="/">
                    <Header type={"sub"} />
                </Route> */}
                <Route exact path="/" component={Main} />
                <Route path="/" render={() =>
                    <Header type={"sub"} />
                } />
            </Switch>

            <Route path="/department">
                <Department selectedMenu={selectedMenu} />
            </Route>

            <Route path="/community" component={Community} />

            <Route path="/gallery" component={Gallery} />

            <Route path="/location" component={Location} />

            <Route path="/members" component={Members} />

            <Route path="/Youtube" component={Youtube} />

            <Footer />
        </>
    );
}

export default App;
