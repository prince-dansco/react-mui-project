import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import blog1 from "../asset/image/blog_1.png";
import blog2 from "../asset/image/blog2.png";
import blog1Icon from "../asset/image/blog_1_icon.png";
import blog3 from "../asset/image/bloge_3.png";
import blog3Icon from "../asset/image/blog_3_icon.png";
import blog4 from "../asset/image/blog_4.png";
import blog4Icon from "../asset/image/blog_4_icon.png";
import blog2Icon from "../asset/image/blog_2_icon.png";

const Blog = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
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
          }}
        >
          Our Blog Post
        </Typography>
      </Box>
      <Stack
        direction={isMatch ?  "column" : "row"}
        spacing={isMatch ? 4 : 2}
        py="30px"
        display="flex"
        px={isMatch ? "15px" : "60px"}
        // flexWrap={isCorrect ? "wrap" : isMatch ? "wrap" : "nowrap"}
      >
        <Box>
          <Card sx={{ maxWidth:isMatch? 344 :345 }}>
            <CardMedia
              component="img"
              alt="blog image"
              height="215"
              src={blog1}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                sx={{ color: "gray", fontSize: "1rem", fontWeight: "bold" }}
              >
                lifeStyle
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="h2"
                sx={{ fontWeight: "700" }}
              >
                5 Reasons It's Time to Upgrade Your Vitamin Routine
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "13.5px", color: "gray" }}
              >
                Your recommendations are backed by our scientific advisory
                board, made of leading doctors, scientists, and nutritionists.
                We are upfront about levels of clinical research and are
                transparent about our supply chain. So you can make healthy
                decisions you &#39;re comfortable with.
              </Typography>
            </CardContent>
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="start"
              gap="20px"
              marginBottom="20px"
              pl="15px"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <img src={blog1Icon} alt="" />
                <Box>
                  <Typography
                    variant="h5"
                    component="h6"
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    French Adlebra
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontSize: "14px", color: "gray" }}
                  >
                    Apr 1, 2022
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Card>
        </Box>
        {/*  */}
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="blog image"
              height="215"
              src={blog2}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                sx={{ color: "gray", fontSize: "1rem", fontWeight: "bold" }}
              >
                lifeStyle
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="h2"
                sx={{ fontWeight: "700" }}
              >
                5 Reasons It's Time to Upgrade Your Vitamin Routine
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary "
                sx={{ fontSize: "13.5px", color: "gray" }}
              >
                Your recommendations are backed by our scientific advisory
                board, made of leading doctors, scientists, and nutritionists.
                We are upfront about levels of clinical research and are
                transparent about our supply chain. So you can make healthy
                decisions you &#39;re comfortable with.
              </Typography>
            </CardContent>
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="start"
              gap="20px"
              marginBottom="20px"
              pl="15px"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <img src={blog2Icon} alt="blog icon two" />
                <Box>
                  <Typography
                    variant="h5"
                    component="h6"
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    French Adlebra
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontSize: "14px", color: "gray" }}
                  >
                    Apr 1, 2022
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Card>
        </Box>
        {/*  */}
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="blog image"
              height="215"
              src={blog3}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                sx={{ color: "gray", fontSize: "1rem", fontWeight: "bold" }}
              >
                lifeStyle
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="h2"
                sx={{ fontWeight: "700" }}
              >
                5 Reasons It's Time to Upgrade Your Vitamin Routine
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "13.5px", color: "gray" }}
              >
                Your recommendations are backed by our scientific advisory
                board, made of leading doctors, scientists, and nutritionists.
                We are upfront about levels of clinical research and are
                transparent about our supply chain. So you can make healthy
                decisions you &#39;re comfortable with.
              </Typography>
            </CardContent>
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="start"
              gap="20px"
              marginBottom="20px"
              pl="15px"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <img src={blog3Icon} alt="" />
                <Box>
                  <Typography
                    variant="h5"
                    component="h6"
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    French Adlebra
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontSize: "14px", color: "gray" }}
                  >
                    Apr 1, 2022
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Card>
        </Box>
        {/*  */}
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="blog image"
              height="215"
              src={blog4}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                sx={{ color: "gray", fontSize: "1rem", fontWeight: "bold" }}
              >
                lifeStyle
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="h2"
                sx={{ fontWeight: "700" }}
              >
                5 Reasons It's Time to Upgrade Your Vitamin Routine
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "13.5px", color: "gray" }}
              >
                Your recommendations are backed by our scientific advisory
                board, made of leading doctors, scientists, and nutritionists.
                We are upfront about levels of clinical research and are
                transparent about our supply chain. So you can make healthy
                decisions you &#39;re comfortable with.
              </Typography>
            </CardContent>
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="start"
              gap="20px"
              marginBottom="20px"
              pl="15px"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <img src={blog4Icon} alt="" />
                <Box>
                  <Typography
                    variant="h5"
                    component="h6"
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    French Adlebra
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontSize: "14px", color: "gray" }}
                  >
                    Apr 1, 2022
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Blog;
