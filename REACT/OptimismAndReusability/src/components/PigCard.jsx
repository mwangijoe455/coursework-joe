import { useState } from 'react';

function PigCard({ pig, onToggleGreased }) {
  const [showDetails, setShowDetails] = useState(false);
  const { id, name, weight, breed, greased, image, medal } = pig;

  return (
    <div className={`ui raised fluid card ${greased ? 'greased' : ''}`}>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">
          <span className="ui label">
            {greased ? 'Greased' : 'Not greased'}
          </span>
        </div>
        <div className="description">
          <div className="ui two buttons">
            <button
              className="ui basic button"
              onClick={() => setShowDetails(prev => !prev)}
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            <button
              className="ui basic orange button"
              onClick={() => onToggleGreased(id)}
            >
              Toggle Greased
            </button>
          </div>
          {showDetails && (
            <div className="ui segment">
              <div className="ui relaxed divided list">
                <div className="item"><strong>Breed</strong> <span className="right floated">{breed}</span></div>
                <div className="item"><strong>Weight</strong> <span className="right floated">{weight} kg</span></div>
                {medal && (
                  <div className="item"><strong>Medal</strong> <span className="right floated">{medal}</span></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PigCard;