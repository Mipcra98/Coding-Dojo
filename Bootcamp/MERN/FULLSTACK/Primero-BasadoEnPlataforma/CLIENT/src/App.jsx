
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import './App.css';

const App = () => 
{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/receta/:id" element={<RecipeDetails />} />
          <Route path="/nueva-receta" element={<RecipeForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;