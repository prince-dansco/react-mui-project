
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import heroimg from "../asset/image/hero_img.png";
import Okro from "../asset/icons/okro.png";
import onion from "../asset/icons/onion.png";
import tomatos from "../asset/icons/tomatos.png";
import React from 'react'


const HeroCont = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
    direction={isMatch ? "column" : "row"}
    spacing={2}
    display="flex"
    alignItems="center"
    gap="35px"
    margin="20px"
    marginTop="30px"
    sx={{ px: isMatch ? "10px" : "70px" }}
  >
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{ fontWeight: "bold", color: "#303030" }}
      >
        100% Healthy & tasty
      </Typography>
      <Typography
        variant="h2"
        component="h4"
        sx={{ fontSize: isMatch ? "3.5rem" : "4.8rem" }}
      >
        <Box component="span" sx={{ color: "green" }}>
          ORGANIC{" "}
        </Box>
        <Box component="span" sx={{ color: "gray" }}>
          FOOD
        </Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", color: "gray" }}
      >
        A place where help you to buy fresh grocery.Tasty and <br /> 100%
        healthy
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#F0693E",
          color: "white",
          marginRight: "20px",
          "&:hover": {
            backgroundColor: "tomato",
          },
        }}
      >
        How to order
      </Button>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "transparent",

          "&:hover": {
            backgroundColor: "#F0693E",
            color: "white",
          },
        }}
      >
        Get sale
      </Button>
    </Box>
    {/*  */}
    <Box sx={{ position: "relative" }}>
      <Box
        component="img"
        src={heroimg}
        alt="hero image"
        sx={{
          position: "relative",
          mb:"-105px",
          width: "100%",
        }}
      />
      <Box
        component="img"
        src={onion}
        alt="onion icon"
        sx={{
          position: "absolute",
          top: "-20px",
          right: "-30px",
          display: isMatch ? "none" : "block",
        }}
      />
      <Box
        component="img"
        src={tomatos}
        alt="tomatos icon"
        sx={{
          position: "absolute",
          bottom: "65px",
          left: 0,
          display: isMatch ? "none" : "block",
        }}
      />

      <Box
        component="img"
        src={Okro}
        alt="okro icon"
        sx={{
          position: "absolute",
          bottom: "23px",
          right: "-45px",
          display: isMatch ? "none" : "block",
        }}
      />
    </Box>
  </Stack>
  )
}

export default HeroCont