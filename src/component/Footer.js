import React from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../asset/icons/logo_icon.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      direction={isMatch ? "column" : "row"}
      spacing={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#F0693E"
      color="white"
      width= {isMatch?"100%":"85%"}
      mx={isMatch ? "0" : "75px"}
      mb="30px"
      mt="70px"
      px="14px"
     
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
          color="white"
          sx={{
            textTransform: "uppercase",
            marginLeft: "-18px",
            marginBottom: "-32px",
            fontSize: "1.2rem",
          }}
        >
          {" "}
          Prince{" "}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "white",
          }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box component="span" sx={{ color: "green" }}>
            Prince studio
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          All rights reserved
        </Typography>
      </Box>
      <Box sx={{display:"flex",
      alignItems:"center",
      gap:"15px"}}>
        <FacebookIcon sx={{
       
       "&:hover": {
        scale:"1.09",
        cursor:"pointer"
      },
        }} />
        <TwitterIcon />
        <LinkedInIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </Box>
     
    </Stack>
  );
};

export default Footer;
