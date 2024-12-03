import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import bg_new from "../asset/image/bg_new.png";

const HeroSpecification = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Box>
      <Box
        sx={{
          background: `url(${bg_new}) no-repeat cover center`,
          backgroundColor: "green",
          width: "100%",
          height: isMatch ? "fit-content" : "190px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: "30px",
          borderTopLeftRadius: "30px",
          boxShadow: 2,
          zIndex: 1,
          mb: "-30px",
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: isMatch ? "column" : "row",
            gap: isMatch ? "2.2em" : "1em",
            py: isMatch ? "1.6em" : "1em",
            justifyContent: "space-around",
            width: "85%",
          }}
        >
          <Box sx={{ color: "white", textAlign: "center" }}>
            <Typography variant="h3" component="h5">
              1975+
            </Typography>
            <Typography variant="body1" component="span">
              Total product
            </Typography>
          </Box>
          <Box sx={{ color: "white", textAlign: "center" }}>
            <Typography variant="h3" component="h5">
              2880+
            </Typography>
            <Typography variant="body1" component="span">
              Satisfied clients
            </Typography>
          </Box>
          <Box sx={{ color: "white", textAlign: "center" }}>
            <Typography variant="h3" component="h5">
              3219+
            </Typography>
            <Typography variant="body1" component="span">
              Project completed
            </Typography>
          </Box>
          <Box sx={{ color: "white", textAlign: "center" }}>
            <Typography variant="h3" component="h5">
              100%
            </Typography>
            <Typography variant="body1" component="span">
              Guaratee
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSpecification;
