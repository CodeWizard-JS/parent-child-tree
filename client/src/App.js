import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import Accordions from "./Components/Accordion";
import { getAllMembersAction } from "./appRedux/actions";
import CreateForm from "./Components/MemberForm";

const App = () => {
  const dispatch = useDispatch();
  const allMembers = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllMembersAction());
  }, []);

  const createFormTrigger = ({ onClick }) => {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        startIcon={<PersonAddRoundedIcon />}
      >
        Create Member
      </Button>
    );
  };

  const renderNoDataFound = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        my={2}
        style={{ opacity: "0.2" }}
      >
        <img
          alt="logo"
          src="./family-tree.png"
          className="logo"
          height={100}
          width={100}
        />
        <Typography variant="h5">No Data Found</Typography>
      </Box>
    );
  };

  return (
    <div className="parent-wrapper">
      <AppBar position="static" color="transparent">
        <Toolbar spacing={3}>
          <img
            alt="logo"
            src="./family-tree.png"
            className="logo"
            height={50}
            width={50}
          />
          <Typography variant="h6" style={{ flexGrow: 1 }} ml={2}>
            Family Tree View
          </Typography>
          <CreateForm Trigger={createFormTrigger} />
        </Toolbar>
      </AppBar>
      <div className="inner-container">
        <Card raised={true} classes={{ root: { minWidth: "300px" } }}>
          <Typography variant="h6" ml={2} mt={2}>
            Members List
          </Typography>
          <div className="data-container">
            {allMembers.members.length
              ? allMembers.members.map((member) => (
                  <Accordions member={member} key={member.id} />
                ))
              : renderNoDataFound()}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
