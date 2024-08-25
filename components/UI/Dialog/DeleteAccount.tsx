"use client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Lottie from "lottie-react";
import loadingAnimation from "@/components/Animations/Lottie/blueloading.json";

const DeleteAccount = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [cookies, setCookie, removeCookie] = useCookies(["access"]);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const deleteAccount = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/delete-account`, {});
      console.log(res.data);
      removeCookie("access", { path: "/" });
      localStorage.removeItem("userInfo");

      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <div className="w-full flex justify-center mt-12">
        <button
          className="bg-red-600 text-white px-12 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm rounded-lg hover:bg-red-800"
          onClick={() => setOpen(true)}
        >
          Delete Account
        </button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {loading ? (
          <div className="w-full flex justify-center">
            <div className="w-[100px] h-[100px] ">
              <Lottie animationData={loadingAnimation} />
            </div>
          </div>
        ) : (
          <>
            {" "}
            <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete your account?
                <p>
                  Deleting your account will remove all of your information from
                  our database. This cannot be undone.
                </p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button
                onClick={deleteAccount}
                autoFocus
                className="text-white bg-red-600 hover:bg-red-800"
              >
                Delete
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default DeleteAccount;
