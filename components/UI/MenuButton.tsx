"use client";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <IconButton onClick={handleClick}>
      <MenuIcon className="text-white" />
    </IconButton>
  );
};

export default MenuButton;
