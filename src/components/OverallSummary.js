import {
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const OverallSummary = ({ output }) => {
  const [hideTrap, setHideTrap] = useState(true);

  if (!output) return null;

  const { totalOccurrences, patterns } = output;
  const sortedArr = Object.values(patterns).sort(function (a, b) {
    return b.count - a.count;
  });
  console.log(output);
  return (
    <Paper sx={{ p: "32px", mb: "40px", display: "flex" }}>
      <div>
        <Typography variant="h6" gutterBottom>
          Overall Summary
        </Typography>
        <Typography gutterBottom sx={{ pb: "10px" }}>
          Total Patterns Found: {totalOccurrences}
        </Typography>
        {sortedArr.map((obj) => (
          <div key={obj.pattern} style={{ display: "flex" }}>
            <Typography variant="body1" gutterBottom sx={{ width: "200px" }}>
              📌 {obj.pattern}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {obj.count}
            </Typography>
          </div>
        ))}
      </div>
      <div style={{ flexGrow: 1 }}>
        <img
          src={hideTrap ? "WithoutTrap.png" : "WithTrap.png"}
          alt="withoutTrap"
          width="95%"
          style={{ padding: "32px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={hideTrap}
                onChange={() => {
                  setHideTrap(!hideTrap);
                }}
                name="antoine"
              />
            }
            label="Hide Trap State"
          />
        </div>
      </div>
    </Paper>
  );
};

export default OverallSummary;
