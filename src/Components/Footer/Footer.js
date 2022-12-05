import React, { useState, useEffect } from "react";
import { Box, Container, Link, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export function Footer() {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            {"Copyright © "}
            <Link
              href="https://github.com/SheraramPrajapat1998"
              underline="hover"
            >
              Sheraram Prajapat{" "}
            </Link>
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
