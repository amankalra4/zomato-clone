import { Breadcrumbs, ButtonBase, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { breadCrumbText, breadCrumbLink } from "./styles";

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
    if (index !== 0) return <Typography color="textSecondary" className={breadCrumbText}>{data}</Typography>;
    const { push } = useRouter();
    return <ButtonBase className={breadCrumbLink} onClick={() => push("/")}>{data}</ButtonBase>;
};

export default BreadCrumbs;
