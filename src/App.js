import Home from "./pages/home/Home";
import Premise from "./pages/premise/Premise";
import Person from "./pages/person/Person";
import Tasks from "./pages/tasks/Tasks";
import Reports from "./pages/reports/Reports";
import Help from "./pages/help/Help";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { personInputs, premiseInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="premise">
              <Route index element={<Premise />} />
              <Route path=":premiseId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={premiseInputs} title="Add new Premise" />}
              />
            </Route>
            <Route path="person">
              <Route index element={<Person />} />
              <Route path=":personId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={personInputs} title="Add new person" />}
              />
            </Route>
            <Route path="tasks">
              <Route index element={<Tasks />} />
              <Route path=":taskId" element={<Tasks />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="reports" element={<Reports />} />
            <Route path="help" element={<Help />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
