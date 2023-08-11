import React from "react";

import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

interface Props {
  //   title: string;
  //   children: React.ReactNode;
  //   buttonText: string;
  open: boolean;
  handleClose: () => void;
  cancelHandler: () => void;
}

const CancelOrderDialog: React.FC<Props> = ({
  open,
  handleClose,
  cancelHandler,
  //   title,
  //   children,
  //   buttonText,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* <DialogTitle id="alert-dialog-title">{title}</DialogTitle> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <p className="text-lg lg:text-xl  text-red-700 text-center">
            Are you sure you want to cancel trade ?
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={cancelHandler}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelOrderDialog;
