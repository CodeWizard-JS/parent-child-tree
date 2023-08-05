import React from "react";
import Dialog from "@mui/material/Dialog";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, IconButton, Typography } from "@mui/material";

export default function CustomeDialog({ title, close, open, children }) {
  return (
    <Dialog open={open}>
      <Box p={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{title}</Typography>
          <IconButton
            color="primary"
            style={{ marginLeft: "10px" }}
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            <CloseRoundedIcon color="primary" />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Dialog>
  );
}
