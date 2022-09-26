import { ThemeProvider } from "styled-components";
import { myTheme } from "./types/my-theme";
import { Provider } from "./context/Provider";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Provider>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
