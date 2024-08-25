"use client";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const DeleteAccount = () => {
  const [open, setOpen] = useState<boolean>(false);

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
    <>
      {" "}
      <div className="w-full flex justify-center mt-12">
        <Link href="/kyc">
          <button
            className="bg-red-600 text-white px-12 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm rounded-lg hover:bg-red-800"
            onClick={() => setOpen(true)}
          >
            Delete Account
          </button>
        </Link>
      </div>
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
    </>
  );
};

export default DeleteAccount;
