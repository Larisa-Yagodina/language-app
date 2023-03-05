import Snackbar from '@mui/material/Snackbar';
import {connect} from "react-redux";
import {Alert} from "@mui/material";

function PositionedSnackbar(props) {

    const { vertical, horizontal, open, message, alertColour } = props.isOpenAlert;

    const handleClose = () => {
        props.closeAlert(false)
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                // message={message}
                key={vertical + horizontal}
            >
            <Alert onClose={handleClose} severity={alertColour} sx={{ width: '100%' }}>
                {message}
            </Alert>
            </Snackbar>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isOpenAlert: state.isOpenAlert
})

const mapDispatchToProps = (dispatch) => ({
    closeAlert: () => dispatch({
        type: 'CLOSE_ALERT'
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(PositionedSnackbar)