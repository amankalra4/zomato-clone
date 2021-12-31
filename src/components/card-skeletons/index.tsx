import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import classes from "./style.module.scss";

interface ICardSkeletonProps {
  arrayLength: number;
}

export default function CardSkeleton({ arrayLength = 4 }: ICardSkeletonProps) {
  const arr = [];
  for (let i = 0; i < arrayLength; i += 1) {
    arr.push(i);
  }
  return (
    <div className={classes.container}>
      {arr.map((el) => (
        <div className={classes.innerContainer} key={el}>
          <Skeleton
              variant="rect"
              width={100}
              height={100}
              className={classes.rectangleSkeleton}
          />
          <Skeleton variant="text" className={classes.textSkeleton} />
          <Skeleton variant="text" className={classes.textSkeleton} />
          <Skeleton variant="text" className={classes.textSkeleton} />
        </div>
      ))}
    </div>
  );
}
