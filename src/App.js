import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home"
function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:ida" element={<Detail />}></Route>
    </Routes>
  </Router>;
};

export default App;
