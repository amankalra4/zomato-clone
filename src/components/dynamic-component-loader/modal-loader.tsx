import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import CircularLoader from "./circular-loader";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    outline: "none"
};

export default function BasicModal() {
    return (
        <div>
            <Modal open>
                <Box sx={style}>
                    <CircularLoader />
                </Box>
            </Modal>
        </div>
    );
}
