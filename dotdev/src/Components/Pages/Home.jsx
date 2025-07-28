import React from "react";
import { Box, Stack, Chip, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "black",
        m: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Component */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            bgcolor: "#2e2e2e",
            width: "20%",
            height: "45px",
            borderRadius: 3,
            justifyContent: "space-evenly",
            textAlign: "center",
            mt: 2,
            minWidth: "fit-content",
            gap: 1,
          }}
        >
          <Typography sx={{ mt: 1, cursor: "pointer" }} color="white">
            Home
          </Typography>

          <Typography sx={{ mt: 1, cursor: "pointer" }} color="white">
            About
          </Typography>

          <Typography sx={{ mt: 1, cursor: "pointer" }} color="white">
            Projects
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
