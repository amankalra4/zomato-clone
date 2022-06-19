/* eslint-disable default-param-last */
import { SET_NAME } from "../types";

export interface IFirstReducer {
    name: string;
}

const initialState: IFirstReducer = {
    name: "guest"
};

const firstReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return { ...state };
    }
};

export default firstReducer;
