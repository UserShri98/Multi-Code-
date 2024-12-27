import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProDetail from './component/ProDetail';
import ProList from './component/ProList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProList />} />
        <Route path="/product/:id" element={<ProDetail />} />
      </Routes>
    </Router>
  );
}

export default App;