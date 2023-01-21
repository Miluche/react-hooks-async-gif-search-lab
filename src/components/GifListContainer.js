import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([]);

    function getGifs() {
        fetch("https://api.giphy.com/v1/gifs/trending?api_key=4ucGsPfHS047O9X4msauoH606PhFbpSS&rating=g&limit=3")
            .then((res) => res.json())
            .then((results) => {
                setGifs(results.data)
            });
    }

    function onSearch(term) {
        fetch(`https://api.giphy.com/v1/gifs/search?q="${term}"&api_key=4ucGsPfHS047O9X4msauoH606PhFbpSS&rating=g&limit=3`)
            .then((res) => res.json())
            .then((results) => setGifs(results.data));
    }

    useEffect(() => {
        getGifs();
        return;
    }, []);

    return (
        <div className="container-fluid">
            <GifSearch onSearch={onSearch} />
            <GifList gifs={gifs} />
        </div>
    );
}

export default GifListContainer;