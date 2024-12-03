import React from "react";
import {
  Box,
  Button,
  TextField,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import newImage from "../asset/image/main.png";
import newImage1 from "../asset/image/left.png";
import newImage2 from "../asset/image/right.png";
import bg_new from "../asset/image/bg_new.png";

const ContactDetail = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const StyledTextField = styled(TextField)({
    "& .MuiInputBase-input::placeholder": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    input: {
      color: "white",
    },
  });
  return (
    <Box>
      <Box
        sx={{
          background: `url(${bg_new})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "green",
          width: isMatch ? "100%" : "100%",
          height: isMatch ? "fit-Content" : "280px",
          display: "flex",
          flexDirection: isMatch ? "column" : "row",
          alignItems: "center",
          margin: "40px 0",
        }}
      >
        <Box>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={newImage}
              alt="image"
              sx={{ position: "relative", width: isMatch ? "100%" : "530px" }}
            />
            <Box
              component="img"
              src={newImage1}
              alt="image"
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                display: isMatch ? "none" : "block",
              }}
            />
            <Box
              component="img"
              src={newImage2}
              alt="image"
              sx={{
                position: "absolute",
                bottom: "80px",
                left: "0",
                display: isMatch ? "none" : "block",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: isMatch ? "10px" : "20px",
            color: "white",
            py: isMatch ? "15px" : "4px",
          }}
        >
          <StyledTextField
            placeholder="email me now @gmail.com"
            sx={{ width: isMatch ? "100%" : "500px", borderColor: "white" }}
          />
          <Button
            variant="text"
            sx={{
              backgroundColor: "#F0693E",
              color: "white",
              px: "13px",
              "&:hover": {
                backgroundColor: "tomato",
                color: "white",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetail;
