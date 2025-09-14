import { useState } from 'react';
import './InstructionsList.css';

const InstructionsList = ({ instructions }) => {
  const [checkedInstructions, setCheckedInstructions] = useState({});

  const handleInstructionCheck = (index) => {
    setCheckedInstructions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="instructions-list">
      {instructions.map((instruction, index) => (
        <div
          key={index}
          className={`instruction-item ${checkedInstructions[index] ? 'checked' : ''}`}
          onClick={() => handleInstructionCheck(index)}
        >
          <div className="instruction-content">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id={`instruction-${index}`}
                checked={checkedInstructions[index] || false}
                onChange={() => handleInstructionCheck(index)}
                className="instruction-checkbox"
              />
              <label htmlFor={`instruction-${index}`} className="checkbox-label">
                <svg className="check-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 6.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/>
                </svg>
              </label>
            </div>
            <div className="instruction-text">
              <span className="step-number">{index + 1}</span>
              <span className="instruction-description">{instruction}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructionsList;