import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/landing";
import ProjectPage from "./page/products";
import ChatRoom from "./page/chatRoom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <Routes>
      
          <Route path="/" element={<LandingPage />} />

          <Route path="/products" element={<ProjectPage />} />
          <Route path="/chat" element={<ChatRoom/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
