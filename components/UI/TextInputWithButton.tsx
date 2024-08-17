"use client";
import React from "react";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { currenciesState } from "@/redux/features/currenciesSlice";

interface TextInputWithButtonProps {
  icon?: React.ReactNode;
  placeholder?: string;
  type: string;
  name: string;
  value: string;
  config?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: any;
  };
  selectOptions?: any;
  label: string;
  buttonText?: string;
  menuOptions?: any;
  defaultButtonText?: string;
  onChangeHandler?: (selected: currenciesState) => void;
  inputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputWithButton: React.FC<TextInputWithButtonProps> = ({
  label,
  icon,
  buttonText,
  type,
  name,
  value,
  menuOptions,
  defaultButtonText,
  onChangeHandler,
  inputHandler,
  placeholder,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <p className="text-sm">{label}</p>
      <div className="w-full flex">
        <TextField
          id="outlined-size-small"
          hiddenLabel
          size="small"
          fullWidth
          InputProps={{ sx: { borderRadius: 0 } }}
          className="w-full"
          type={type}
          name={name}
          value={value}
          onChange={inputHandler}
          placeholder={placeholder && placeholder}
        />{" "}
        <div>
          <button
            className={`bg-[#1984FF] text-white px-3 py-1 text-sm rounded-r-sm  ${
              buttonText ? "w-[100px]" : ""
            } h-full`}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {buttonText ? buttonText.toUpperCase() : null}
            {icon && <KeyboardArrowDownIcon />}
          </button>
          {menuOptions && menuOptions.length > 0 && (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {menuOptions.map((option: any) => (
                <MenuItem
                  key={option.name}
                  onClick={() => {
                    onChangeHandler && onChangeHandler(option);
                    handleClose();
                  }}
                >
                  {option.name.toUpperCase()}
                </MenuItem>
              ))}
            </Menu>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TextInputWithButton;
