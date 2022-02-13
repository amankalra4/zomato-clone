import Skeleton from "@material-ui/lab/Skeleton";
import { container, innerContainer, rectangleSkeleton, textSkeleton } from "./styles";

export default function CardSkeleton({ arrayLength = 4 }) {
    return (
        <div className={container}>
            {[...Array(arrayLength)].map((el, index) => (
                <div className={innerContainer} key={`${index + 1}`}>
                    <Skeleton variant="rect" width={100} height={100} className={rectangleSkeleton} />
                    <Skeleton variant="text" className={textSkeleton} />
                    <Skeleton variant="text" className={textSkeleton} />
                    <Skeleton variant="text" className={textSkeleton} />
                </div>
            ))}
        </div>
    );
}
