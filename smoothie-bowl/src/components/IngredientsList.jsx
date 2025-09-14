import { useState } from 'react';
import './IngredientsList.css';

const IngredientsList = ({ ingredients }) => {
  const [hoveredIngredient, setHoveredIngredient] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  const handleIngredientCheck = (index) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="ingredients-list">
      {ingredients.map((ingredient, index) => (
        <div
          key={index}
          className={`ingredient-item ${hoveredIngredient === index ? 'expanded' : ''} ${checkedIngredients[index] ? 'checked' : ''}`}
          onMouseEnter={() => setHoveredIngredient(index)}
          onMouseLeave={() => setHoveredIngredient(null)}
          onClick={() => handleIngredientCheck(index)}
        >
          <div className="ingredient-header">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id={`ingredient-${index}`}
                checked={checkedIngredients[index] || false}
                onChange={() => handleIngredientCheck(index)}
                className="ingredient-checkbox"
              />
              <label htmlFor={`ingredient-${index}`} className="checkbox-label">
                <svg className="check-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 6.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/>
                </svg>
              </label>
            </div>
            <span className="ingredient-name">{ingredient.name}</span>
          </div>

          <div className="ingredient-image-container">
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className="ingredient-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;