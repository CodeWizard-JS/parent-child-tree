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
import { useChildren } from "../utils/hooks";
import MemberForm from "./MemberForm";
import DeleteModal from "./DeleteModal";

const Accordions = ({ member }) => {
  const { name, age, children: childrenIds, id } = member;
  const children = useChildren(childrenIds, id);
  const [expanded, setExpanded] = useState(false);
  const [childrensList, setChildrensList] = useState([]);
  const [editData, setEditData] = useState({});
  const [deleteData, setDeleteData] = useState({});

  useEffect(() => {
    if (expanded) {
      setChildrensList(children ?? []);
    } else {
      setChildrensList([]);
    }
  }, [children, expanded]);

  const editFormTrigger = ({ onClick }) => {
    return (
      <IconButton
        variant="outlined"
        color="primary"
        style={{ marginLeft: "10px" }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
          setEditData(member);
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
          setDeleteData(member);
        }}
      >
        <PersonRemoveRoundedIcon color="error" />
      </IconButton>
    );
  };

  const renderAccordionContent = () => {
    return (
      <>
        <Box flexGrow={1}>
          <Box>
            <Typography style={{ fontWeight: "bold" }}>{name}</Typography>
            <Typography>Age: {age}</Typography>
            {childrensList?.length ? (
              <Typography>Parent of : {childrensList?.length}</Typography>
            ) : null}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <MemberForm data={editData} isEdit={true} Trigger={editFormTrigger} />
          <DeleteModal Trigger={deleteModalTrigger} member={deleteData} />
        </Box>
      </>
    );
  };
  if (!children?.length) {
    return (
      <Box display="flex" px={2} py={1}>
        {renderAccordionContent()}
      </Box>
    );
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={(e, state) => setExpanded(state)}
      className="accordian"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {renderAccordionContent()}
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
