import useDevice from "@src/custom-hooks/use-is-Phone";
import { tabImage } from "./styles";

type Label_types = "Delivery" | "Dining Out" | "Night Life";

interface ITabImageProps {
    path: string;
    width?: string;
    height?: string;
    altText: Label_types;
}

const TabImage = ({
    path,
    width = "75",
    height = "55",
    altText
}: ITabImageProps) => {
    const isPhone = useDevice("575");
    return (
        <img
            src={path}
            dat-src={path}
            width={isPhone ? 55 : width}
            height={isPhone ? 40 : height}
            alt={altText}
            className={tabImage}
        />
    );
};

export default TabImage;
