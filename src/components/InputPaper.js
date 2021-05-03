import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

const InputPaper = (props) => {
  const [input, setInput] = useState("");
  const { setOutput, recognizer } = props;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const processInput = (e) => {
    e.preventDefault();
    setOutput(recognizer.process(input));
  };

  return (
    <div>
      <form onSubmit={processInput}>
        <TextField
          id="input-text"
          label="Input Text"
          placeholder="Type/Paste your text"
          multiline
          rows={15}
          onChange={handleChange}
          // defaultValue="Default Value"
          sx={{ width: "100%", pb: "10px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "16px",
          }}
        >
          <Button
            variant="contained"
            color="success"
            type="submit"
            size="large"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
    // <Paper elevation={3} sx={{ mb: "32px", padding: "32px" }}>

    // </Paper>
  );
};

export default InputPaper;
