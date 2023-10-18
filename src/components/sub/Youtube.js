import React, { useEffect, useState, useRef } from "react";
import Layout from "../common/Layout";
import Pop from "../common/Pop";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
function Youtube() {
    const [Vids, setVdis] = useState([]);
    const [Index, setIndex] = useState(0);
    const lineRef = useRef(null);
    const pop = useRef(null);

    const getYoutube = async () => {
        let key = "AIzaSyDgv-ToqwoVeH_iMBouKnpnuMXWjqXbK8I";
        let playListId = "PLboMi2lmGKuASt2pNcNqdEgXbbOkKHR3y";
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}`;
        axios.get(url).then((json) => { setVdis(json.data.items) })
    }

    useEffect(() => {
        getYoutube();
    }, [])
    useEffect(() => {
        console.log(Vids);
    }, [Vids])


    return (
        <>
            <Layout name={"Youtube"}>
                <p>Youtube</p>
                {Vids.map((el, index) => (
                    <article key={el.etag}>
                        <div className="text">
                            <h2>{el.snippet.title}</h2>
                            <div className="txt">
                                <p>{el.snippet.description.substr(0, 300) + "..."}</p>
                                <div className="under">
                                    <p>{el.snippet.channelTitle}</p>
                                    <span>{el.snippet.publishedAt.split("T")[0]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="pic">
                            <img src={el.snippet.thumbnails.medium.url} alt={`${el.snippet.title} 이미지`} />
                            <FontAwesomeIcon icon={faYoutube}
                                ref={lineRef}
                                onClick={() => {
                                    setIndex(index);
                                    pop.current.open();
                                }} />
                        </div>
                    </article>
                ))
                }

            </Layout >
            <Pop ref={pop}>
                {Vids.length !== 0 && (
                    <iframe title="집" src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`} frameBorder="0" ></iframe>
                )}
            </Pop>
        </>
    );
}

export default Youtube;

// let key = "AIzaSyBxnZ1kg_BJjZCcQrxHM4iiBdGWtEnUNgE";
// let playlistId = "PLOUTaH0Ih5K8zV_dti0-4B_G39jP84oq2";
// const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}`;