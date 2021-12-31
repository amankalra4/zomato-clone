import { useEffect, useRef } from "react";
import _ from "lodash";

interface IDebounceProps {
    handleChange: (input: string) => void;
    time: number;
}

const useDebounce = ({ handleChange, time }: IDebounceProps) => {
    const inputRef = useRef<any>(null);
    useEffect(() => {
        inputRef.current = _.debounce(handleChange, time);
    }, []);
    return {
        inputRef
    };
};

export default useDebounce;
