import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Slider, Stack, Switch, Typography } from "@mui/material";
import StandardImageList from "./StandardImageList";
import { AccordianData } from "../Utils/AccordianData";
import BasicModal from "./BasicModal";

const label = { inputProps: { "aria-label": "Size switch demo" } };

export default function AccordionUsage() {

  return (
    <div style={{ padding: "5px" }}>
      {Object.keys(AccordianData).map((e) => (
        <Accordion elevation={2} key={e}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {e}
          </AccordionSummary>
          <AccordionDetails >
            <StandardImageList ImageData={AccordianData[e]} />
          </AccordionDetails>
        </Accordion>
      ))}
      <Accordion elevation={2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Advanced Settings
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={5}>
            {["View Stats", "Post Processing", "SSAO", "Lamp"].map((e) => (
              <Stack key={e} direction={"row"} justifyContent={"space-between"}>
                <Typography>{e}</Typography>
                <Switch {...label} defaultChecked size="small" />
              </Stack>
            ))}
            {["Lamp Intensity", "HDRI Intensity"].map((e) => (
              <Stack
                key={e}
                direction={"row"}
                justifyContent={"space-between"}
                spacing={5}
              >
                <Typography>{e}</Typography>
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
              </Stack>
            ))}
            <BasicModal />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
