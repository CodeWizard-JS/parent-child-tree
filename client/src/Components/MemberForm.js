import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import CustomeDialog from "./CustomDialog";
import { useModalState } from "../utils/hooks";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const MemberForm = ({ data, isEdit }) => {
  const [formData, setFormData] = useState({ name: "", age: "", parent: "" });
  const { showModal, toggleCreateModal } = useModalState();

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {};

  useEffect(() => {
    if (!showModal) {
      setFormData({ name: "", age: "", parent: "" });
    }
  }, [showModal]);

  useEffect(() => {
    if (isEdit) {
      setFormData(data);
    }
  }, [isEdit]);

  return (
    <>
      <Button variant="outlined" onClick={toggleCreateModal}>
        Create Member
      </Button>
      <CustomeDialog open={showModal} title="Create Member" c>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              fullWidth
              onChange={handleChange}
              variant="standard"
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
            />
          </Box>
          <Box mt={2}>
            <FormControl fullWidth>
              <InputLabel id="age-label">Parent</InputLabel>
              <Select
                value={formData.parent}
                onChange={handleChange}
                variant="standard"
                labelId="age-label"
                name="parent"
                InputLabelProps={{ shrink: true }}
                fullWidth
              >
                <MenuItem value="">--Select Parent--</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button type="submit">Submit</Button>
        </form>
      </CustomeDialog>
    </>
  );
};

export default MemberForm;
