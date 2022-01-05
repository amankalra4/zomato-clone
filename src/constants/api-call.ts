import axios from "axios";
import config from "../../next.config";

export const commonHeader = (url: string) => {
    return axios.get(url, {
        headers: {
            "user-key": config.config.zomatoAPI
        }
    });
};
