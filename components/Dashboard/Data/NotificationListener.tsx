"use client";

import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NotificationListener = ({ token }: { token: string }) => {
  const [userInfo, setUserInfo] = useState<any>();
  const [open, setOpen] = React.useState(false);
  const [notifications, setNotifications] = useState<any>([]);
  const [currentNotification, setCurrentNotification] = useState<any>({});

  useEffect(() => {
    const user: any = localStorage.getItem("userInfo");

    setUserInfo(JSON.parse(user));
  }, []);

  useEffect(() => {
    const pusher = new Pusher("e597b63b0a16d6c4a2c6", {
      cluster: "mt1",
      channelAuthorization: {
        endpoint: `${process.env.API_ENDPOINT}/api/chat/auth`,
        transport: "ajax",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
      userAuthentication: {
        endpoint: `${process.env.API_ENDPOINT}/chat/auth`,
        transport: "ajax",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    });

    pusher.signin();

    pusher.connection.bind("error", (err: any) => {
      if (err) {
        console.log(err);
      }
    });
    // console.log(userInfo?.id);
    const channel = pusher.subscribe(`private-chatify.${userInfo?.id}`);
    // console.log(channel);

    channel.bind("completed", (data: any) => {
      // console.log(data);
      setNotifications((prevState: any) => {
        return [...prevState, data];
      });
    });

    return () => pusher.unsubscribe(`private-chatify.${userInfo?.id}`);
  }, [userInfo]);

  useEffect(() => {
    if (notifications.length > 0) setOpen(true);
    setCurrentNotification(notifications[1]);
  }, [notifications]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //   console.log(currentNotification?.message);
  //console.log(notifications);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        <p className="font-semibold">
          {notifications[notifications.length - 1]?.order.name}{" "}
          <span className="ml-2">
            ${notifications[notifications.length - 1]?.order.price}
          </span>
        </p>
        <p>{notifications[notifications.length - 1]?.message}</p>
      </Alert>
    </Snackbar>
  );
};

export default NotificationListener;
