import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

// Import smoothie bowl images
import mixedBerryBowl from './images/smoothiebowls/MixedBerry.png';
import chocolateBowl from './images/smoothiebowls/Chocolate.png';
import mangoPineappleBowl from './images/smoothiebowls/MangoPineapple.png';

// Import ingredient images
import mixedBerry from './images/ingredients/mixedberries.jpg';
import bananaImg from './images/ingredients/banana.jpg';
import greekYogurtImg from './images/ingredients/greek yogurt.jpg';
import honeyImg from './images/ingredients/honey.jpg';
import granolaImg from './images/ingredients/grenolla.jpg';
import peanutButterImg from './images/ingredients/peanut butter.jpg';
import cocoaPowderImg from './images/ingredients/coco powder.jpg';
import almondMilkImg from './images/ingredients/almond milk.jpg';
import darkChocolateChipsImg from './images/ingredients/dark chocolate chips.jpg';
import mangoImg from './images/ingredients/mango.jpg';
import pineappleImg from './images/ingredients/pineapple.jpg';
import coconutMilkImg from './images/ingredients/coconut milk.jpg';
import limeImg from './images/ingredients/lime.jpg';
import coconutFlakesImg from './images/ingredients/Coconut flakes.jpg';

// Import video
import smoothieBowlVideo from './videos/Smoothie_Bowl_Video_Generation.mp4';

const recipes = [
  {
    id: 1,
    title: 'Mixed Berry Smoothie Bowl',
    image: mixedBerryBowl,
    ingredients: [
      { name: 'Mixed berries', image: mixedBerry }, // Using banana as substitute since no mixed berries image
      { name: 'Banana', image: bananaImg },
      { name: 'Greek yogurt', image: greekYogurtImg },
      { name: 'Honey', image: honeyImg },
      { name: 'Granola', image: granolaImg },
    ],
    instructions: [
      'Blend frozen berries, banana, and yogurt until smooth',
      'Pour into a bowl',
      'Top with fresh berries and granola',
      'Drizzle with honey',
      'Serve immediately'
    ],
    video: smoothieBowlVideo
  },
  {
    id: 2,
    title: 'Chocolaty Peanut Butter and Banana Smoothie Bowl',
    image: chocolateBowl,
    ingredients: [
      { name: 'Banana', image: bananaImg },
      { name: 'Peanut butter', image: peanutButterImg },
      { name: 'Cocoa powder', image: cocoaPowderImg },
      { name: 'Almond milk', image: almondMilkImg },
      { name: 'Dark chocolate chips', image: darkChocolateChipsImg },
    ],
    instructions: [
      'Blend banana, peanut butter, cocoa powder, and almond milk',
      'Pour into a bowl',
      'Top with sliced banana',
      'Sprinkle with chocolate chips',
      'Add a dollop of peanut butter'
    ],
    video: smoothieBowlVideo
  },
  {
    id: 3,
    title: 'Tropical Mango and Pineapple Smoothie Bowl',
    image: mangoPineappleBowl,
    ingredients: [
      { name: 'Mango', image: mangoImg },
      { name: 'Pineapple', image: pineappleImg },
      { name: 'Coconut milk', image: coconutMilkImg },
      { name: 'Lime', image: limeImg },
      { name: 'Coconut flakes', image: coconutFlakesImg },
    ],
    instructions: [
      'Blend mango, pineapple, and coconut milk until smooth',
      'Pour into a bowl',
      'Top with fresh mango and pineapple chunks',
      'Sprinkle with coconut flakes',
      'Add a lime wedge for garnish'
    ],
    video: smoothieBowlVideo
  }
];

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
