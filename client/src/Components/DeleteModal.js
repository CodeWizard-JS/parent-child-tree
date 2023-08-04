import React from "react";
import { Box, Button, Typography } from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import CustomeDialog from "./CustomDialog";
import { useModalState } from "../utils/hooks";

const DeleteModal = ({ Trigger, member }) => {
  const { showModal, toggleCreateModal } = useModalState();

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Trigger onClick={toggleCreateModal} />
      <CustomeDialog
        open={showModal}
        close={toggleCreateModal}
        title={"Are you sure?"}
      >
        <Box
          className="delete-modal-wrapper"
          display="flex"
          alignItems="center"
        >
          <WarningRoundedIcon color="error" fontSize="large" />
          <Typography ml={2}>
            Are you going to delete <b>{member.name}</b>?
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="end">
          <Typography fontSize={10}>
            Note: This deletion will not affect the children.
          </Typography>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </CustomeDialog>
    </div>
  );
};

export default DeleteModal;
