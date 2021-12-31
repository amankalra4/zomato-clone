/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumbs, ButtonBase, Typography } from "@material-ui/core";
// import Link from "@material-ui/core/Link";
import { useRouter } from "next/router";
import classes from "./style.module.scss";

interface IBreadCrumbProps {
    pathArray: Array<string>
}

const BreadCrumbs = ({ pathArray }: IBreadCrumbProps) => (
    <Breadcrumbs>
        {pathArray.map((el, index) => <Item data={el} index={index} key={el} />)}
    </Breadcrumbs>
);

interface IItemProps {
    data: string;
    index: number;
}
const Item = ({ data, index }: IItemProps) => {
    if (index !== 0) return <Typography color="textSecondary" className={classes.breadCrumbText}>{data}</Typography>;
    const { push } = useRouter();
    return <ButtonBase className={classes.breadCrumbLink} onClick={() => push("/")}>{data}</ButtonBase>;
};

export default BreadCrumbs;
