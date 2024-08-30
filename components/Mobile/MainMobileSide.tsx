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
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Image from "next/image";

import ExchangeSvg from "../UI/SvgIcons/ExchangeSvg";
import DashboardSvg from "../UI/SvgIcons/DashboardSvg";
import NewsSvg from "../UI/SvgIcons/NewsSvg";
import HelpIcon from "@mui/icons-material/Help";

import SideNavItems from "../Dashboard/Sidebar/SideNavItems";

type Anchor = "top" | "left" | "bottom" | "right";

const links = [
  { title: "Home", url: "/", icon: <DashboardSvg /> },
  { title: "About", url: "/about", icon: <ExchangeSvg /> },
  {
    title: "Buy GiftCards",
    url: "/dashboard/exchange/buy",
    icon: <ExchangeSvg />,
  },
  {
    title: "Sell GiftCards",
    url: "/dashboard/exchange/sell",
    icon: <ExchangeSvg />,
  },
  {
    title: "FAQs",
    url: "/faq",
    icon: <HelpIcon className="text-white" />,
  },
  // { title: "News", url: "#", icon: <NewsSvg /> },
];
const MainMobileSide = () => {
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
      <div className="w-full flex justify-center mt-12">
        <Image
          src={"/images/apklogo-new.png"}
          width={100}
          height={100}
          alt="apk site logo"
        />
      </div>
      <div className="flex flex-col justify-between flex-1  px-5 mt-6">
        <SideNavItems linkItems={links} />
      </div>

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

export default MainMobileSide;
