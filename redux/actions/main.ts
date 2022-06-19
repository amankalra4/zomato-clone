import { Dispatch } from "redux";
import { SET_NAME } from "../types";

export interface IProps {
    type: string;
    payload: string;
}

export const setInfoRedux = (name: string) => (dispatch: Dispatch<IProps>) => {
    dispatch({
        type: SET_NAME,
        payload: name
    });
};
