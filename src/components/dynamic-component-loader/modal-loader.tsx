import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import useDevice from "@custom-hooks/use-is-Phone";
import CircularLoader from "./circular-loader";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    outline: "none"
};

export default function BasicModal() {
    const isPhone = useDevice("560");
    return (
        <div>
            <Modal open>
                <Box sx={style} style={{ width: isPhone ? "90%" : "400px" }}>
                    <CircularLoader />
                </Box>
            </Modal>
        </div>
    );
}
