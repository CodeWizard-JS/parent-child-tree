import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import CustomeDialog from "./CustomDialog";
import { useModalState } from "../utils/hooks";
import { deleteMemberAction } from "../appRedux/actions";

const DeleteModal = ({ Trigger, member }) => {
  const dispatch = useDispatch();
  const { showModal, toggleModal } = useModalState();

  const handleDelete = () => {
    dispatch(deleteMemberAction(member.id));
    toggleModal();
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Trigger onClick={toggleModal} />
      <CustomeDialog
        open={showModal}
        close={toggleModal}
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
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </CustomeDialog>
    </div>
  );
};

export default DeleteModal;
