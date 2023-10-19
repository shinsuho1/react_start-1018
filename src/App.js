import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setYoutube } from "./redux/action";
import { setMembers } from "./redux/action";

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
    const dispatch = useDispatch();

    const getYoutube = async () => {
        let key = "AIzaSyDgv-ToqwoVeH_iMBouKnpnuMXWjqXbK8I";
        let playListId = "PLboMi2lmGKuASt2pNcNqdEgXbbOkKHR3y";
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}`;
        axios.get(url).then((json) => {
            dispatch(setYoutube(json.data.items));
        })
    }

    const getMembers = async () => {
        const url = process.env.PUBLIC_URL + "/DB/member.json";
        await axios.get(url).then((json) => {
            dispatch(setMembers(json.data.members));
        })
    }

    useEffect(() => {
        getYoutube();
        getMembers();
    }, []);

    return (
        <>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/" render={() =>
                    <Header type={"sub"} />
                } />
            </Switch>

            <Route path="/department" component={Department} />

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
