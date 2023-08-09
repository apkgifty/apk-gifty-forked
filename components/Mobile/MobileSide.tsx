"use client";

import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { mainPageNavHandler } from "@/redux/features/mobileNavSlice";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";

type Anchor = "top" | "left" | "bottom" | "right";
const MobileSide = () => {
  // const [state, setState] = React.useState(false);

  const openState = useAppSelector(
    (state) => state.mobileNavReducer.mainPageNavOpen
  );

  const dispatch = useAppDispatch();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      dispatch(mainPageNavHandler(open));
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Image
        src={"/images/apklogo-new.png"}
        width={150}
        height={150}
        alt="apk site logo"
      />
      <List>
        {["Home", "About", "Buy GiftCards"].map((text, index) => (
          <ListItem key={text} disablePadding className="">
            <ListItemButton>
              {/* <ListItemIcon sx={{ color: "#fff" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer(true)}>{"left"}</Button> */}
        <SwipeableDrawer
          PaperProps={{
            sx: {
              backgroundColor: "#161D26",
              color: "#fff",
            },
          }}
          anchor={"left"}
          open={openState}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default MobileSide;
