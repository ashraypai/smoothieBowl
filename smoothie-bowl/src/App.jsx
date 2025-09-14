import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import { recipes } from './data/recipes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
