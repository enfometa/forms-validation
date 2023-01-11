import { emFormsGlobalConfig } from "@enfometa/em-forms";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

emFormsGlobalConfig.registerEmFormElements([
  {
    elements: [{ type: "input", props: { type: "checkbox" } }],
    valueFunc: (e) => e.target.checked,
    valuePropName: "checked",
  },
]);

function App() {
  return (
    <div className="container">
      <Login />
      <Profile />
    </div>
  );
}

export default App;
