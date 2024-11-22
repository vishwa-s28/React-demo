import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Demo from "./pages/Demo";
import DemoUseRef from "./pages/DemoUseRef";
import UseStateVsUseReducer from "./pages/UseStateVsUseReducer";
import DemoUseCallbackVSuseMemo from "./pages/DemoUseCallbackVSuseMemo";
import DemoCustomHook from "./pages/DemoCustomHook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Demo />} />
          <Route path="useStateVSuseReducer" element={<UseStateVsUseReducer />} />
          <Route path="useRef" element={<DemoUseRef />} />
          <Route path="useCallbackVSuseMemo" element={<DemoUseCallbackVSuseMemo />} />
          <Route path="customHook" element={<DemoCustomHook/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
