import Image from "next/image";
import { END_OF_SEARCH_RESULTS } from "@constants/index";
import { css } from "@emotion/css";

const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

const EndOfSearchResults = () => (
    <div className={container}>
        <h3 style={{ marginRight: "20px" }}>End of search results</h3>
        <Image src={END_OF_SEARCH_RESULTS} alt="end-of-search" width={180} height={150} loading="lazy" />
    </div>
);

export default EndOfSearchResults;
