import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Index from './pages/Index';
import ChatRoom from './pages/chatroom/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
