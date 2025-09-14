import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ recipes }) => {
  return (
    <div className="home">
      <header className="header">
        <h1 className="title">Smoothie Bowl Delights</h1>
        <p className="subtitle">Healthy, delicious, and Instagram-worthy bowls</p>
      </header>

      <div className="recipe-cards-container">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="recipe-card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="recipe-card" data-bg={recipe.image}>
              <div className="card-overlay">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{recipe.title}</h3>
                  <div className="card-info">
                    <span className="ingredient-count">
                      {recipe.ingredients.length} ingredients
                    </span>
                    <span className="step-count">
                      {recipe.instructions.length} steps
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;