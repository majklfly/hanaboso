import "./App.css";

import { TasksContainer } from "./containers/TasksContainer";
import { AddTaskContainer } from "./containers/AddTaskContainer";

import { Background } from "./components/Background";

function App() {
  // main application component containing containers of the app
  return (
    <div className="App">
      <Background />
      <AddTaskContainer />
      <TasksContainer />
    </div>
  );
}

export default App;
