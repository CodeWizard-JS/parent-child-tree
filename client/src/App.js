import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Accordions from "./Components/Accordion";
import { getAllMembersAction } from "./appRedux/actions";
import CreateForm from "./Components/MemberForm";

const App = () => {
  const dispatch = useDispatch();
  const allMembers = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(getAllMembersAction());
  }, []);

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
          <CreateForm />
        </Toolbar>
      </AppBar>
      <div className="inner-container">
        <Card raised={true} classes={{ root: { minWidth: "300px" } }}>
          <Typography variant="h6" ml={2} mt={2}>
            Members List
          </Typography>
          <div className="data-container">
            {allMembers.map(({ name, children, age, id }) => {
              return (
                <Accordions
                  name={name}
                  age={age}
                  childrenData={children}
                  key={id}
                />
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
