import Menu from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
const Pages = ["Home", "Categories", "Contact", "blog", "Services ", "Sign up"];

const DrawerCom = () => {
  const [openD, setOpenD] = useState(false);
  return (
    <>
      <Drawer open={openD} onClose={() => setOpenD(false)}>
        <List>
          {Pages.map((page, index) => (
            <ListItemButton onClick={()=> setOpenD(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto", fontSize: "1.3rem" }}
        onClick={() => setOpenD(!openD)}
      >
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerCom;
