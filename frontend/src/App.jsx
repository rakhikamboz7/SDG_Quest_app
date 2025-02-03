import Content from './pages/Home';
import Home from './pages/Homepage';
import SDGQuiz from './pages/QuizesPage';
import LoginSignup from './components/Login';
import GoalContent from './components/goalContent';
import KnowledgeBites from './pages/knowledgeBites';
import { Routes, Route } from "react-router-dom"; // No need to import `Router`
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Home';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomePage />} />

            <Route path="/Content" element={<Content />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/goal/:id" element={<GoalContent />} />
            <Route path="/quiz/:id" element={<SDGQuiz />} />
            <Route path="/knowledge" element={<KnowledgeBites />} />
            <Route path="/login" element={<LoginSignup />} />
        </Routes>
    );
};

export default App;

