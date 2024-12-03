import React, { useState } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Search, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Divider,
  styled,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RouteIcon from "@mui/icons-material/Route";
import logo from "../asset/icons/logo_icon.png";
import DrawerCom from "./drawerCom";

function Navbar() {
  const YellowBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "orange",
      color: "white",
    },
  }));

  const Pages = [
    { name: "Home", link: "#home" },
    { name: "Categories", link: "#categories" },
    { name: "Contact", link: "#contact" },
    { name: "Blog", link: "#blog" },
    { name: "Services", link: "#services" },
  ];
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor:isMatch?"gray": "transparent", color: "black" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="logo icon"
              style={{ flexGrow: 1 }}
              width={50}
              height={70}
            />
            <Typography
              variant="body1"
              color="initial"
              sx={{
                textTransform: "uppercase",
                marginLeft: "-18px",
                marginBottom: "-32px",
                fontSize: "1.2rem",
              }}
            >
              Prince
            </Typography>
          </Box>
          {isMatch ? (
            <>
              <DrawerCom />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                fontSize="bold"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                flexGrow="2"
              >
                {Pages.map((page, index) => (
                  <Tab
                    key={index}
                    label={page.name}
                    href={page.link}
                    component="a"
                    smooth={true}
                    duration={500}
                  />
                ))}
              </Tabs>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
                <IconButton color="">
                  <RouteIcon />
                </IconButton>
                <IconButton color="">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton color="">
                  <YellowBadge badgeContent={2}>
                    <ShoppingCart />
                  </YellowBadge>
                </IconButton>
                <IconButton
                  color=""
                  sx={{ marginLeft: "7px", marginRight: "7px" }}
                >
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Search />
                  <Divider orientation="vertical" variant="middle" flexItem />
                </IconButton>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{ backgroundColor: "green", color: "white" }}
                >
                  Sign in
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
