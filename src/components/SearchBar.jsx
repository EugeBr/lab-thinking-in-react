import React, { useState } from 'react';

function SearchBar(props) {

    const [searchedString, setSearchedString] = useState("");

    const handleSearch = (e) => {
        setSearchedString(e.target.value)
        props.search(e.target.value)
    }
    return (
        <div>
            <h3>Search</h3>
            <input type="text" value={searchedString} onChange={handleSearch} />
        </div>
    )
}

export default SearchBar;