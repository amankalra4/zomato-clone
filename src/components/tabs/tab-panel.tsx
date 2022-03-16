import { ReactNode } from "react";
import { Box } from "@material-ui/core";

interface TabPanelProps {
    text?: string;
    index: any;
    value: any;
    children?: ReactNode;
}
const TabPanel = (props: TabPanelProps) => {
    const { value, index, children, text } = props;
    return <div>{value === index && <Box className="boxContainer">{typeof text === "string" ? text : children}</Box>}</div>;
};

export default TabPanel;
