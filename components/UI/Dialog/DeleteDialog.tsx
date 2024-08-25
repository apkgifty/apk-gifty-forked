"use client";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const DeleteDialog = ({ openDialog }: { openDialog: boolean }) => {
  const [open, setOpen] = useState<boolean>(openDialog);

  const [cookies, setCookie, removeCookie] = useCookies(["access"]);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const deleteAccount = async () => {
    try {
      const res = await axios.delete(`/api/delete-account`, {});
      console.log(res.data);
      removeCookie("access", { path: "/" });
      localStorage.removeItem("userInfo");

      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={deleteAccount} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
