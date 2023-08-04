import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import MemberForm from "./MemberForm";
import DeleteModal from "./DeleteModal";

const Accordions = ({ member }) => {
  const { name, age, childrenData, id, ...rest } = member;
  console.log(`122 data`, member);
  const [expanded, setExpanded] = useState(false);
  const [childrensList, setChildrensList] = useState([]);
  const [editData, setEditData] = useState({});
  const [deleteData, setDeleteData] = useState({});

  useEffect(() => {
    if (expanded) {
      setChildrensList(childrenData ?? []);
    } else {
      setChildrensList([]);
    }
  }, [childrenData, expanded]);

  const editFormTrigger = ({ onClick }) => {
    return (
      <IconButton
        variant="outlined"
        color="primary"
        style={{ marginLeft: "10px" }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
          setEditData({ name, age, childre: childrenData, id, ...rest });
        }}
      >
        <EditRoundedIcon />
      </IconButton>
    );
  };

  const deleteModalTrigger = ({ onClick }) => {
    return (
      <IconButton
        variant="outlined"
        color="error"
        style={{ marginLeft: "10px" }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
          setDeleteData({ id, name });
        }}
      >
        <PersonRemoveRoundedIcon color="error" />
      </IconButton>
    );
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={(e, state) => setExpanded(state)}
      className="accordian"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box flexGrow={1}>
          <Box>
            <Typography style={{ fontWeight: "bold" }}>{name}</Typography>
            <Typography>Age: {age}</Typography>
            {childrenData?.length ? (
              <Typography>Parent of : {childrenData?.length}</Typography>
            ) : null}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <MemberForm data={editData} isEdit={true} Trigger={editFormTrigger} />
          <DeleteModal Trigger={deleteModalTrigger} member={deleteData}/>
        </Box>
      </AccordionSummary>
      {childrensList.length && expanded ? (
        <AccordionDetails>
          {childrensList.map((member) => (
            <Accordions member={member} key={member.id} />
          ))}
        </AccordionDetails>
      ) : null}
    </Accordion>
  );
};

export default Accordions;
