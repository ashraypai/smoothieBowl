import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import VideoPlayer from './VideoPlayer';
import './RecipeDetail.css';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id, recipes]);

  if (!recipe) {
    return (
      <div className="recipe-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-detail-grid">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <IngredientsList ingredients={recipe.ingredients} />
        </div>

        <div className="video-section">
          <h2>How to Make</h2>
          <VideoPlayer videoUrl={recipe.video} title={recipe.title} />
        </div>

        <div className="empty-section">
        </div>

        <div className="instructions-section">
          <h2>Instructions</h2>
          <InstructionsList instructions={recipe.instructions} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;