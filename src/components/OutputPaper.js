import { Paper, Typography } from "@material-ui/core";

function BoldedText(props) {
  const { output } = props;
  const { linesResult } = output;

  return (
    <Paper sx={{ p: "32px", mb: "40px" }}>
      <Typography variant="h6" gutterBottom>
        Original text with patterns bolded:
      </Typography>
      <div style={{ height: "16px" }} />
      <div style={{ maxHeight: "40vh", overflow: "auto", paddingTop: "10px" }}>
        {linesResult.map((line, index) => (
          <BoldedLine key={index} line={{ ...line, index }} />
        ))}
      </div>
    </Paper>
  );
}

function BoldedLine(props) {
  const { line } = props;
  const { rawLine, foundSet, index } = line;
  //   console.log(line);

  var processedText = rawLine;

  const sortedArr = Array.from(foundSet).sort(function (a, b) {
    return b.length - a.length;
  });

  sortedArr.forEach((pattern) => {
    processedText = processedText.replaceAll(pattern, `<b>${pattern}</b>`);
  });

  processedText = `Line ${index}:\t  ` + processedText;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: processedText }}
      style={{ whiteSpace: "pre-wrap" }}
    />
  );
}

const OutputPaper = (props) => {
  const { output } = props;

  if (!output) return null;
  //   console.log(output);

  return <BoldedText output={output} />;
};

export default OutputPaper;
