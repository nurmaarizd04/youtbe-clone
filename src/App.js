import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen App">
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
