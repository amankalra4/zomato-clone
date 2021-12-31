import React from "react";
import Image from "next/image";
import { END_OF_SEARCH_RESULTS } from "@src/constants";

const EndOfSearchResults = () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0" }}>
        <h3>End of search results</h3>
        <Image 
            src={END_OF_SEARCH_RESULTS} 
            alt="abc" 
            width={180} 
            height={150}
            loading="lazy" 
        />
    </div>
);

export default EndOfSearchResults;
