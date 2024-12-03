import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Cat1 from "../asset/image/Cat_1.png";
import Cat2 from "../asset/image/Cat_2.png";
import Cat3 from "../asset/image/Cat_3.png";
import bgCat from "../asset/image/bg_Cat.png";
import { ArrowForwardIos } from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AppleIcon from "@mui/icons-material/Apple";
import playStore from "../asset/image/play_store.png";
import appStore from "../asset/image/appstore.png";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import cati1 from "../asset/image/1.png";
import cati2 from "../asset/image/2.png";
import cati4 from "../asset/image/4.png";

const Categoris = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "lightgray",
          px: isMatch ? "20px" : "70px",
          py: "55px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
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
              my: "50px",
            }}
          >
            Our Best Categories
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMatch ? "column" : "row",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: isMatch ? "80%" : "20%",
              padding: "10px",
              paddingBottom: "20px",
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <img src={Cat1} alt="categories image" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: "500", fontSize: "20px" }}
                >
                  Vegetables
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ color: "gray", fontSize: "15px" }}
                >
                  Purchasing from select family farmers who farms organically
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    border: "1px solid green",
                    backgroundColor: "transparent",
                    mt: "20px",
                    color: "green",
                    "&:hover": {
                      backgroundColor: "green",
                      color: "white",
                    },
                  }}
                >
                  ORDER NOW
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              width: isMatch ? "80%" : "20%",
              padding: "10px",
              paddingBottom: "20px",
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <img src={Cat2} alt="categories image" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: "500", fontSize: "20px" }}
                >
                  Fruite
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ color: "gray", fontSize: "15px" }}
                >
                  Purchasing from select family farmers who farms organically
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    border: "1px solid green",
                    backgroundColor: "transparent",
                    mt: "20px",
                    color: "green",
                    "&:hover": {
                      backgroundColor: "green",
                      color: "white",
                    },
                  }}
                >
                  ORDER NOW
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              width: isMatch ? "80%" : "20%",
              padding: "10px",
              paddingBottom: "20px",
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <img src={Cat3} alt="categories image" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: "500", fontSize: "20px" }}
                >
                  Salad
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ color: "gray", fontSize: "15px" }}
                >
                  Purchasing from select family farmers who farms organically
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    border: "1px solid green",
                    backgroundColor: "transparent",
                    mt: "20px",
                    color: "green",
                    "&:hover": {
                      backgroundColor: "green",
                      color: "white",
                    },
                  }}
                >
                  ORDER NOW
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: isMatch ? "80%" : "20%",
              height: "363px",
              backgroundImage: `url(${bgCat})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{ mb: 2, color: "white" }}
              >
                Others
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ mb: 2, color: "white" }}
              >
                Milk, Tools, Spice, etc.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  mt: "20px",
                  p: "10px",
                  "&:hover": {
                    backgroundColor: "lightgreen",
                    color: "white",
                  },
                }}
                endIcon={<ArrowForwardIos />}
              >
                See Others
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*  */}
      <Stack
        direction={isMatch ? "column" : "row"}
        spacing={4}
        dislpay="flex"
        alignItems="center"
        px={isMatch ? "15px" : "85px"}
        py="10px"
        justifyContent="center"
        my="55px"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: isMatch ? "10px" : "25px",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              component="h5"
              sx={{
                fontSize: isMatch ? "1.5rem" : "2.2rem",
                mt: isMatch ? "20px" : "0",
              }}
            >
              We Are here
              <Box component="span" sx={{ color: "green", ml: "10px" }}>
                For You
              </Box>
            </Typography>
          </Box>
          <Box sx={{}}>
            <Typography
              variant="h4"
              component="h6"
              sx={{ color: "gray", fontSize: isMatch ? "1rem" : "20px" }}
            >
              Groce could be your daily service. We set the high standard
              inspired by forest system to produce healthy crops with the
              authentic taste of vegetables
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "11px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ color: "green", fontSize: "20px" }}
              />
              <Typography
                variant="h4"
                component="h5"
                sx={{ color: "gray", fontSize: "20px" }}
              >
                Best Services and fast response
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ color: "green", fontSize: "20px" }}
              />
              <Typography
                variant="h4"
                component="h5"
                sx={{ color: "gray", fontSize: "20px" }}
              >
                UserFriendly App
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ color: "green", fontSize: "20px" }}
              />
              <Typography
                variant="h4"
                component="h5"
                sx={{ color: "gray", fontSize: "18px" }}
              >
                profesional staff
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMatch ? "column" : "row",
              alignItems: "center",
              gap: "15px",
              mt: "19px",
            }}
          >
            <Box>
              <img src={appStore} alt="app store" />
            </Box>

            <Box>
              <img src={playStore} alt="apple app" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMatch ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
          }}
        >
          <Box
            sx={{
              my: "10px",
              width: isMatch ? "200px" : "195px",
              mx: "13px",
              backgroundColor: "white",
              boxShadow: 3,
              px: isMatch ? "10px" : "15px",
              py: "5px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                py: "11px",
              }}
            >
              <img src={cati1} alt="RestaurantIcon" />
              <Box>
                <Typography
                  Typography
                  variant="h2"
                  component="h4"
                  sx={{
                    fontSize: isMatch ? "19px" : "18px",
                    fontWeight: "700",
                  }}
                >
                  Fast Delivery
                </Typography>
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  Deliver within 30 minutes
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              my: "10px",
              width: isMatch ? "200px" : "195px",
              mx: "13px",
              backgroundColor: "white",
              boxShadow: 3,
              px: "15px",
              py: "5px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                py: "11px",
              }}
            >
              <img src={cati2} alt="RestaurantIcon" />
              <Box>
                <Typography
                  Typography
                  variant="h2"
                  component="h4"
                  sx={{
                    fontSize: isMatch ? "19px" : "18px",
                    fontWeight: "700",
                  }}
                >
                  Fresh Foods
                </Typography>
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  Enjoy your food fresh and healthy
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              my: "10px",
              width: isMatch ? "200px" : "195px",
              mx: "13px",
              backgroundColor: "white",
              boxShadow: 3,
              px: "15px",
              py: "5px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                py: "11px",
              }}
            >
              <img src={cati2} alt="RestaurantIcon" />
              <Box>
                <Typography
                  Typography
                  variant="h2"
                  component="h4"
                  sx={{
                    fontSize: isMatch ? "19px" : "18px",
                    fontWeight: "700",
                  }}
                >
                  Dine in
                </Typography>
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  Enjoy your food fresh and healthy
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              my: "10px",
              width: isMatch ? "200px" : "195px",
              mx: "13px",
              backgroundColor: "white",
              boxShadow: 3,
              px: "15px",
              py: "5px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                py: "11px",
              }}
            >
              <img src={cati4} alt="RestaurantIcon" />
              <Box>
                <Typography
                  Typography
                  variant="h2"
                  component="h4"
                  sx={{
                    fontSize: isMatch ? "19px" : "18px",
                    fontWeight: "700",
                  }}
                >
                  Pick up
                </Typography>
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  Delivery at your doorstep
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Categoris;
