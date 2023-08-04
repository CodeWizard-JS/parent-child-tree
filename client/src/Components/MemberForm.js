import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useModalState } from "../utils/hooks";
import { addMemberAction, updateMemberAction } from "../appRedux/actions";
  import CustomeDialog from "./CustomDialog";

const MemberForm = ({ data, isEdit, Trigger }) => {
  const selectList = useSelector((state) => state.selectList);
  const { showModal, toggleCreateModal } = useModalState();
  const [formData, setFormData] = useState({ name: "", age: "", parent: null });

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateMemberAction(formData));
    } else {
      dispatch(addMemberAction(formData));
    }
  };

  useEffect(() => {
    if (isEdit) {
      if (!showModal) {
        setFormData({ name: "", age: "", parent: "" });
      } else {
        setFormData(data);
      }
    }
  }, [isEdit, showModal]);

  return (
    <>
      <Trigger onClick={toggleCreateModal} />
      <CustomeDialog
        open={showModal}
        title={isEdit ? "Edit Member" : "Create Member"}
        close={toggleCreateModal}
      >
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              fullWidth
              onChange={handleChange}
              variant="standard"
              required
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Age"
              type="number"
              name="age"
              value={formData.age}
              fullWidth
              onChange={handleChange}
              variant="standard"
              required
            />
          </Box>
          <Box mt={2}>
            <FormControl fullWidth margin="dense" variant="standard">
              <InputLabel id="age-label">Parent</InputLabel>
              <Select
                value={formData.parent}
                onChange={handleChange}
                variant="standard"
                labelId="age-label"
                name="parent"
                fullWidth
              >
                <MenuItem value={""}> --Select Parent-- </MenuItem>
                {selectList.map((member) => (
                  <MenuItem value={member.id}>{member.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mt={2} textAlign="right">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </CustomeDialog>
    </>
  );
};

export default MemberForm;
