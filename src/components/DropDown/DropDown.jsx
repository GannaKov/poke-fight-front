/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import styles from "./DropDown.module.css";

const DropDown = ({ id }) => {
  const navigate = useNavigate();
  const createHandleMenuClick = (menuItem) => {
    return () => {
      navigate(`/pokemon/${id}/${menuItem.toLowerCase()}`);
    };
  };
  return (
    <Dropdown>
      <MenuButton className={styles.ddMenuBtn}>Choose type Info</MenuButton>
      <Menu className={styles.ddMenu}>
        <MenuItem
          className={styles.ddMenuItem}
          onClick={createHandleMenuClick("Name")}
        >
          Name
        </MenuItem>
        <MenuItem
          className={styles.ddMenuItem}
          onClick={createHandleMenuClick("Base")}
        >
          Base
        </MenuItem>
        <MenuItem
          className={styles.ddMenuItem}
          onClick={createHandleMenuClick("Type")}
        >
          Type
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default DropDown;
