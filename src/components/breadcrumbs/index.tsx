/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumbs, Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import { useRouter } from "next/router";

interface IBreadCrumbProps {
    pathArray: Array<string>
}

const BreadCrumbs = ({ pathArray }: IBreadCrumbProps) => (
    <Breadcrumbs>
        {pathArray.map((el, index) => <Item data={el} index={index} length={pathArray.length} key={el} />)}
    </Breadcrumbs>
);

interface IItemProps {
    data: string;
    index: number;
    length: number;
}
const Item = ({ data, index, length }: IItemProps) => {
    if (index !== 0) return <Typography color="textSecondary" style={{ textTransform: "capitalize" }}>{data}</Typography>;
    const { push } = useRouter();
    return <Link color="textPrimary" onClick={() => push("/")}>{data}</Link>;
};

export default BreadCrumbs;
