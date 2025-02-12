import Header from "./components/Header";
import Card from "./components/Card";
import ToDoContainer from "./components/ToDoContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/landing";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      username: "vasanth",
      password: "123",
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup users={users} setUsers={setUsers} />}
          ></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
