import React from "react";
import { Box, Typography } from "@mui/material";
import kody from "/src/Assets/IMG_5205.png";
import du from "/src/Assets/IMG_5251.png";
const AboutMe = () => {
  return (
    <Box>
      <Typography sx={{ color: "grey" }}>
        Take a look into my life outside of programming
      </Typography>
      <Box
        className="images_box"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: 3,
        }}
      >
        <Box>
          <img src={kody} style={{ height: "320px", borderRadius: "4px" }} />
        </Box>
        <Box>
          <img src={du} style={{ height: "320px", borderRadius: "4px" }} />
        </Box>
        <Box>
          <img src={kody} style={{ height: "320px", borderRadius: "4px" }} />
        </Box>
        <Box>
          <img src={kody} style={{ height: "320px", borderRadius: "4px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
