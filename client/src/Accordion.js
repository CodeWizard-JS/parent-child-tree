import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordions = ({ name, children }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children.length
            ? children.map((id) => {
                return data.map((val) => {
                  if (val.id === id) {
                    return (
                      <Accordions name={val.name} children={val.children} />
                    );
                  }
                });
              })
            : null}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;

// :
// <div style={{ marginLeft: "10px" }}>
//     <Typography>GRAND CHILD</Typography>
// </div>
