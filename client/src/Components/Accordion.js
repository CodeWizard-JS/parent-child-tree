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
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Accordions = ({ name, age, childrenData }) => {
  const [expanded, setExpanded] = useState(false);
  const [childrensList, setChildrensList] = useState([]);

  useEffect(() => {
    if (expanded) {
      setChildrensList(childrenData);
    } else {
      setChildrensList([]);
    }
  }, [childrenData, expanded]);

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={(e, state) => setExpanded(state)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box flexGrow={1}>
            <Box>
              <Typography>{name}</Typography>
              <Typography>Age: {age}</Typography>
              {childrenData.length ? (
                <Typography>Parent of : {childrenData.length}</Typography>
              ) : null}
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <IconButton
              variant="outlined"
              color="primary"
              style={{ marginLeft: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <EditNoteIcon />
            </IconButton>
            <IconButton
              variant="outlined"
              color="primary"
              style={{ marginLeft: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <PersonRemoveOutlinedIcon color="error" />
            </IconButton>
          </Box>
        </AccordionSummary>
        {childrensList.length && expanded && (
          <AccordionDetails>
            {childrensList.map(({ name, children, age, id }) => {
              return (
                <Accordions
                  name={name}
                  age={age}
                  childrenData={children}
                  key={id}
                />
              );
            })}
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
};

export default Accordions;
