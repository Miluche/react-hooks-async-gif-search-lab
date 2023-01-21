import React from "react";

function GifList({ gifs }) {
    return (
        <ul className="row col-xs-6">
            {gifs.map((gif) => {
                return <li key={gif.id} className="thumbnail">
                    <img src={gif.images.downsized.url} alt={gif.title} />
                </li>
            })}
        </ul>
    );
}

export default GifList;