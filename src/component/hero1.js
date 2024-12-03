import React from "react";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { StarHalf, StarRate } from "@mui/icons-material";
import secbg1 from "../asset/image/back_1.png";
import secbg2 from "../asset/image/m_bg.png";
import cati1 from "../asset/image/1.png";
import cati2 from "../asset/image/2.png";
import cati3 from "../asset/image/4.png";
import star from "../asset/image/star.png";
import starG from "../asset/image/starG.png";

const HeroDetail = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={isMatch ? "column" : "row"}
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        background: `url(${secbg2}),url(${secbg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "fit-Content",
        mb: "-25px",
      }}
    >
      <Box
        sx={{
          display: "block",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: isMatch ? "column" : "row",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            gap: isMatch ? "10px" : "150px",
            px: "80px",
          }}
        >
          <Box>
            <Box
              sx={{
                display: isMatch ? "none" : "block",
                my: "10px",
                width: "295px",
                mx: "13px",
                backgroundColor: "rgba(0,0,0,.6)",
                boxShadow: 3,
                px: "15px",
                py: "5px",
                borderRadius: "5px",
                backdropFilter: "blur(25px)",
              }}
            >
              <Box
                sx={{
                  display: isMatch ? "none" : "flex",
                  alignItems: "center",
                  gap: "12px",
                  py: "9px",
                }}
              >
                <img src={starG} alt="starimage" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "9px",
                  }}
                >
                  <Typography
                    variant="h2"
                    component="h4"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    Marina Stevani
                  </Typography>
                  <Box sx={{ color: "yellow" }}>
                    <StarRate />
                    <StarRate />
                    <StarRate />
                    <StarRate />
                    <StarHalf />
                  </Box>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      fontSize: "12px",
                      color: "#fff",
                    }}
                  >
                    Made everyone feel at ease and was extremely attentive
                    towards allergies and intolerances.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ zIndex: "1" }}>
              <img src={star} alt="starimage" />
            </Box>
            <Stack
              direction={isMatch ? "column" : "row"}
              alignItems="center"
              gap={isMatch ? "2px" : "5px"}
            >
              <Box
                sx={{
                  my: "7px",
                  width: "195px",
                  mx: "8px",
                  backgroundColor: "transparent",
                  color: "white",
                  px: "8px",
                  py: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    py: "10px",
                    color: "white",
                  }}
                >
                  <img
                    src={cati1}
                    alt="RestaurantIcon"
                    sx={{ color: "white" }}
                  />
                  <Box>
                    <Typography
                      variant="h2"
                      component="h4"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      Fast Delivery
                    </Typography>
                    <Typography
                      variant="body1"
                      component="h6"
                      sx={{
                        fontSize: "12px",
                        color: "white",
                      }}
                    >
                      Deliver within 30 minutes
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  my: "7px",
                  width: "195px",
                  mx: "8px",
                  backgroundColor: "transparent",
                  px: "8px",
                  py: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    py: "10px",
                    color: "white",
                  }}
                >
                  <img
                    src={cati2}
                    alt="RestaurantIcon"
                    sx={{ color: "white" }}
                  />
                  <Box>
                    <Typography
                      variant="h2"
                      component="h4"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      Dine in
                    </Typography>
                    <Typography
                      variant="body1"
                      component="h6"
                      sx={{
                        fontSize: "12px",
                        color: "white",
                      }}
                    >
                      Enjoy your food fresh and healthy
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  my: "7px",
                  width: "195px",
                  mx: "8px",
                  backgroundColor: "transparent",
                  px: "8px",
                  py: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    py: "10px",
                    color: "white",
                  }}
                >
                  <img
                    src={cati3}
                    alt="RestaurantIcon"
                    sx={{ color: "white" }}
                  />
                  <Box>
                    <Typography
                      variant="h2"
                      component="h4"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      Pick up
                    </Typography>
                    <Typography
                      variant="body1"
                      component="h6"
                      sx={{
                        fontSize: "12px",
                        color: "white",
                      }}
                    >
                      Delivery at your doorstep
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default HeroDetail;
