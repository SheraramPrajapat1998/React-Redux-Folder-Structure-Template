import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { clearSnackbar } from '../../Redux/Actions/snackbarAction';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState("");

  const { successSnackbarOpen, errorSnackbarOpen, infoSnackbarOpen, warningSnackbarOpen, message } =
    useSelector((state) => ({
      successSnackbarOpen: state.uiReducer?.successSnackbarOpen || false,
      errorSnackbarOpen: state.uiReducer?.errorSnackbarOpen || false,
      infoSnackbarOpen: state.uiReducer?.infoSnackbarOpen || false,
      warningSnackbarOpen: state.uiReducer?.warningSnackbarOpen || false,
      message: state.uiReducer?.message || "",
    }));
  
  useEffect(() => {
    const openSnackbar = successSnackbarOpen || errorSnackbarOpen || infoSnackbarOpen || warningSnackbarOpen;
    setOpenSnackbar(openSnackbar);
    let severity;
    if (successSnackbarOpen) {
      severity = "success";
    } else if (errorSnackbarOpen) {
      severity = "error";
    } else if (infoSnackbarOpen) {
      severity = "info";
    } else {
      severity = "warning";
    }
    setSeverity(severity);
  }, [successSnackbarOpen, errorSnackbarOpen, infoSnackbarOpen, warningSnackbarOpen])


  const handleClose = () => {
    dispatch(clearSnackbar());
  };

  return (
    <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;