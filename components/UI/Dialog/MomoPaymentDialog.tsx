import React from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

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
  momoPaymentLink: string;
  open: boolean;
  handleClose: () => void;
  sx?: any;
}

const MomoPaymentDialog: React.FC<Props> = ({
  open,
  handleClose,
  momoPaymentLink,
  //   title,
  //   children,
  //   buttonText,
  sx,
}) => {
  const pathName = usePathname();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  //   useEffect(() => {
  //     function notifyParent() {
  //       if (iframeRef.current) {
  //         window.parent.postMessage({ path: iframeRef.current.src }, "*");
  //       }
  //     }

  //     // Notify parent on load
  //     window.addEventListener("load", notifyParent);

  //     // Function to handle messages from the iframe
  //     const handleIframeMessage = (event: any) => {
  //       // Ensure the message is from a trusted source
  //       if (event.origin !== window.location.origin) return;

  //       // Check if the message contains the path
  //       if (event.data && event.data.path) {
  //         console.log("Iframe URL changed to:", event.data.path);
  //         // Close the modal
  //         handleClose();
  //       }
  //     };

  //     // Listen for messages from the iframe
  //     window.addEventListener("message", handleIframeMessage, false);

  //     // MutationObserver to watch for src changes
  //     const observer = new MutationObserver(() => {
  //       notifyParent();
  //     });

  //     if (iframeRef.current) {
  //       observer.observe(iframeRef.current, {
  //         attributes: true,
  //         attributeFilter: ["src"],
  //       });
  //     }

  //     // Cleanup the event listeners and observer on component unmount
  //     return () => {
  //       window.removeEventListener("load", notifyParent);
  //       window.removeEventListener("message", handleIframeMessage, false);
  //       observer.disconnect();
  //     };
  //   }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      //   fullWidth={true}
      maxWidth="xl"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* <DialogTitle id="alert-dialog-title" sx={sx}>
        {title}
      </DialogTitle> */}
      <DialogContent sx={sx}>
        {/* <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText> */}
        <iframe
          src={momoPaymentLink}
          ref={iframeRef}
          className="w-full h-[500px]"
          // onLoad={(event: any) =>
          //   console.log(event?.current?.contentWindow?.location?.href)
          // }
        />
      </DialogContent>
      {/* <DialogActions sx={sx}>
        <Button onClick={handleClose} autoFocus>
          {buttonText}
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default MomoPaymentDialog;
