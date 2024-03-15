import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import Fragen from "../screens/multistep/fragen/Fragen";

import MultiStepForm from "../screens/multistep/MultiStepForm";

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fragen" element={<Fragen />} />
        <Route path="/step/:step" element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigator;
