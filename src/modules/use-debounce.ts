import { useEffect, useRef } from "react";
import debounce from "lodash-es/debounce";

interface IDebounceProps {
    handleChange: (input: string) => void;
    time: number;
}

const useDebounce = ({ handleChange, time }: IDebounceProps) => {
    const inputRef = useRef<any>(null);
    useEffect(() => {
        inputRef.current = debounce(handleChange, time);
    }, []);
    return {
        inputRef
    };
};

export default useDebounce;
