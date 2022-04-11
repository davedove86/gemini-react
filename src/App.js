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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { personInputs, premiseInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="premise">
              <Route
                index
                element={
                  <RequireAuth>
                    <Premise />
                  </RequireAuth>
                }
              />
              <Route path=":premiseId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={premiseInputs} title="Add new Premise" />}
              />
            </Route>
            <Route path="person">
              <Route
                index
                element={
                  <RequireAuth>
                    <Person />
                  </RequireAuth>
                }
              />
              <Route
                path=":personId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={personInputs} title="Add new person" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="tasks">
              <Route
                index
                element={
                  <RequireAuth>
                    <Tasks />
                  </RequireAuth>
                }
              />
              <Route path=":taskId" element={<Tasks />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route
              path="reports"
              element={
                <RequireAuth>
                  <Reports />
                </RequireAuth>
              }
            />
            <Route
              path="help"
              element={
                <RequireAuth>
                  <Help />
                </RequireAuth>
              }
            />
            <Route
              path="settings"
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
