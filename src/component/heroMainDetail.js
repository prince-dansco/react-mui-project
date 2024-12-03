import React from 'react'
import {
    Box,
    Button,
    
    Stack,
    Typography,
   
    useTheme,
    useMediaQuery,
  } from "@mui/material";
import wrap1 from "../asset/image/wrapper.png";


const HeroMainDetail = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
    direction={isMatch ? "column" : "row"}
    spacing={2}
    py="65px"
    px={isMatch ? "15px" : "70px"}
    display="flex"
    justifyContent="space-between"
    sx={{
      backgroundColor: "white",
      borderTopRightRadius: "30px",
      borderTopLeftRadius: "30px",
    }}
  >
    <Box position="relative">
      <Box
        component="img"
        src={wrap1}
        alt="an image"
        sx={{
          position: "relative",
          width: isMatch ? "100%" : "530px",
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "green",
          color: "white",
          "&:hover": {
            backgroundColor: "green",
            color: "lightgreen",
          },
          position: "absolute",
          left: isMatch ? "50px" : "70px",
          bottom: isMatch ? "20px" : "60px",
          py: "15px",
          paddingLeft: isMatch ? "20px" : "95px",
          paddingRight: isMatch ? "20px" : "95px",
          borderRadius: "40px",
        }}
      >
        20+ years of experience
      </Button>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="h1" component="h5" fontSize="2.5rem">
        <Box component="span" sx={{ color: "green" }}>
          HIGHT QUALITY
        </Box>
        <br />
        <Box component="span">ORIGINAL FOOD STORE</Box>
      </Typography>
      <Typography
        variant="h5 "
        component="p"
        sx={{ fontWeight: "500", fontSize: "19px", color: "gray" }}
      >
        Founded in 2009, GROCE is a family business that started with a
        3,500 square meter farm located in Karyawangi Village, West
        Bandung. It soon expanded to an organic movement that encourages
        people to not only consume organic vegetables, but also plant it
        too, wherever they may be. From them you can purchase both the
        farm produce (vegetables, microgreens, etc) and also tools and
        supplies to start your own garden.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "5px",
            height: "100%",
            backgroundColor: "green",
            marginRight: "11px",
          }}
        />
        <Typography
          variant="body1"
          component="p"
          sx={{ color: "gray", fontWeight: "600", fontSize: "15px" }}
        >
          Finding organic food in Jakarta can be tricky but it’s not
          impossible! Here are some great organic food sellers who
          delivers right to your door!
        </Typography>
      </Box>
      <Typography>
        <Box
          component="p"
          sx={{
            fontFamily: "Gwendolyn",
            fontWeight: "900",
            fontStyle: "normal",
            fontSize: "18px",
          }}
        >
          John Doe
        </Box>
        <Box component="p" sx={{ color: "gray", fontSize: "10px" }}>
          Owner
        </Box>
      </Typography>
    </Box>
  </Stack>
  )
}

export default HeroMainDetail