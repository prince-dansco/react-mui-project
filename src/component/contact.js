import React from 'react'
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
  } from "@mui/material";

const ContactSection = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "11px",
            my: "90px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              borderBottom: "4px solid green",
              display: "inline-block",
              textAlign: "center",
              paddingBottom: "4px",
              borderRadius: "5px",
              fontSize: "1.9rem",
              fontWeight: "700",
            }}
          >
            Subscript to Newslatter
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", fontWeight: "400" }}>
            To get weekly recipt updates
          </Typography>
        </Box>
    </Box>
  )
}

export default ContactSection