import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Survey } from './components/Survey';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
