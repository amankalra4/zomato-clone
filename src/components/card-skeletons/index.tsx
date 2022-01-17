import Skeleton from "@material-ui/lab/Skeleton";
import { container, innerContainer, rectangleSkeleton, textSkeleton } from "./styles";

interface ICardSkeletonProps {
  arrayLength: number;
}

export default function CardSkeleton({ arrayLength = 4 }: ICardSkeletonProps) {
  const arr = [];
  for (let i = 0; i < arrayLength; i += 1) {
    arr.push(i);
  }
  return (
    <div className={container}>
      {arr.map((el) => (
        <div className={innerContainer} key={el}>
          <Skeleton
              variant="rect"
              width={100}
              height={100}
              className={rectangleSkeleton}
          />
          <Skeleton variant="text" className={textSkeleton} />
          <Skeleton variant="text" className={textSkeleton} />
          <Skeleton variant="text" className={textSkeleton} />
        </div>
      ))}
    </div>
  );
}
