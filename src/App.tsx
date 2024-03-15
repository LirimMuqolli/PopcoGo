import "./App.css";
import MainNavigator from "./navigator/MainNavigator";
import { FormDataProvider } from "./screens/services/globalstate/FormDataProvider";

function App() {
  return (
    <FormDataProvider>
      <MainNavigator />
    </FormDataProvider>
  );
}

export default App;
