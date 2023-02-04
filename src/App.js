<<<<<<< HEAD

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API.....");
  }, [])
  useEffect(() => {
      console.log("I run when keyword is changed");
  }, [keyword])
  useEffect(() => {
      console.log("I run when counter is changed");
  }, [counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      </div>
      )
}
=======
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
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
  </Router>;
};

export default App;
>>>>>>> bc7f02ea249735399bb5873b2057dc3a5c4c5cf9
