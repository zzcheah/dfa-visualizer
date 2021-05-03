import {
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const LineCard = ({ output }) => {
  const [currentLine, setCurrentLine] = useState(0);
  if (!output) return null;
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);
    if (value === "") setCurrentLine(0);
    else if (value >= 0 && value < output.linesResult.length) {
      //   console.log("change to 0");
      setCurrentLine(value);
    } else {
      setCurrentLine(0);
    }
  };

  const line = output.linesResult[currentLine];
  const { foundSet, patterns } = line;
  const patternFound = foundSet ? Array.from(foundSet) : [];
  var patternStats = [];
  patternFound.forEach((pattern) => {
    patternStats.push(patterns[pattern]);
  });

  return (
    <Paper sx={{ p: "32px", mb: "40px" }}>
      <div style={{ display: "flex" }}>
        <Typography variant="h6" gutterBottom sx={{ flexGrow: 4 }}>
          Line Summary (Line {currentLine})
        </Typography>
        <TextField
          id="standard-number"
          label="Line"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: { min: 0, max: output.linesResult.length - 1 },
          }}
          variant="standard"
          //   value={currentLine}
          onChange={handleChange}
          sx={{ flexGrow: 1, maxWidth: "100px" }}
        />
      </div>
      <div style={{ paddingBottom: "16px" }}>
        {patternFound.length !== 0 ? (
          <div>
            <Typography>Patterns Found:</Typography>
            <ul>
              {patternFound.map((s) => (
                <li key={s}>
                  <strong>{s} ✔️ </strong>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Typography>No Pattern Found! 😥</Typography>
        )}
      </div>

      <Grid container spacing={3}>
        {patternStats.map((obj) => (
          <Grid item key={obj.pattern} xs={6} md={4}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  {obj.pattern}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Count: {obj.count}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1.5 }}>
                  State Changes: <br />
                  {obj.sequence.join(" ➡️ ")}
                </Typography>
                <Typography variant="body1">
                  Found at column: <br />
                  {obj.indexes.join(" • ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default LineCard;
