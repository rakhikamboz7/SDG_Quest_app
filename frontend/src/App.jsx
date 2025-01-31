import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SDGQuiz from './pages/QuizesPage';
import LoginSignup from './components/Login';
import GoalContent from './components/goalContent';


const App = () => {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<HomePage />} />
                
                <Route path="/goal/:id" element={<GoalContent />} />
                <Route path="/quiz" element={<SDGQuiz />} />
                <Route path="/login" element={<LoginSignup />} />
                 {/* Handle not found pages */}
            </Routes>
           
        </Router>
    );
};

export default App;


