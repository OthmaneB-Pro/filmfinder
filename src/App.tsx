import { BrowserRouter } from "react-router-dom";
import AppContent from "./components/AppContent"; 
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppContent>
        <AppRoutes/>
      </AppContent>
    </BrowserRouter>
  );
}

export default App;
