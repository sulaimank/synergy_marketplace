import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Application2 = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={"fade-up"}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Everything your team could need.
        </Typography>
        <Typography variant="h6" color={"text.secondary"} data-aos={"fade-up"}>
          We make sure to include all the amenities and niceties that a growing
          startup could possibly need.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box>
          <Typography fontWeight={700} variant={"h6"} gutterBottom>
            Apply in 15 minutes
          </Typography>
          <Typography>
            Get your dream coworking space without the hassle.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#26ab62" }}
            size="large"
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Application2;
