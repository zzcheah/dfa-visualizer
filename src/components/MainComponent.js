import Container from "@material-ui/core/Container";
import { useState } from "react";
import CustomAppBar from "./CustomAppBar";
import InputPaper from "./InputPaper";
import Recognizer from "../app/Recognizer";
import OutputPaper from "./OutputPaper";
import LineCard from "./LineCard";
import OverallSummary from "./OverallSummary";

const recognizer = new Recognizer();

const MainComponent = () => {
  const [output, setOutput] = useState(null);
  console.log(output);

  return (
    <div>
      <CustomAppBar />
      <Container>
        <InputPaper recognizer={recognizer} setOutput={setOutput} />
        <OutputPaper output={output} />
        <LineCard output={output} />
        <OverallSummary output={output} />
      </Container>
    </div>
  );
};

export default MainComponent;
