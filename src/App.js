import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Demo from "./pages/Demo";
import DemoUseRef from "./pages/DemoUseRef";
import UseStateVsUseReducer from "./pages/UseStateVsUseReducer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="demo" element={<Demo />} />
          <Route path="useStateVSuseReducer" element={<UseStateVsUseReducer />} />
          <Route path="useRef" element={<DemoUseRef />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
