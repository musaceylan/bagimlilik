import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Survey } from './components/Survey';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
