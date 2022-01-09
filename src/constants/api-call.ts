import axios from "axios";
import config from "../../next.config";

export const commonHeader = (url: string) => {
    const finalURL = config.config.baseURL + url;
    return axios.get(finalURL, {
        headers: {
            "user-key": config.config.zomatoAPI
        }
    });
};
