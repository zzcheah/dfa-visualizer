import { ThemeProvider } from "@material-ui/core";
import theme from "./app/theme";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
