import React, { useRef } from "react";

function GifSearch({ onSearch }) {
    const searchInputRef = useRef();

    function handleSubmit(evt) {
        evt.preventDefault();
        const term = searchInputRef.current.value;

        if (term.length > 0) {
            onSearch(term);
        } else {
            searchInputRef.current.focus();
        }
    }

    return (
        <form className="row col-xs-6" onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term:</label>
            <input type={"search"} id="searchInput" name="searchInput" ref={searchInputRef} />
            <button type="submit">Find Gifs</button>
        </form>
    );
}

export default GifSearch;