import { useState } from 'react';
// import { IoSyncCircle } from 'react-icons/io5';

import Header from './Header';
import './Card2.css';

const Card = ({title, icon, children}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => setIsFlipped(!isFlipped);
  
  const header = <Header title={title} icon={icon} onClickFlip={flipCard} />;

  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front">
          {header}
          {children[0]}
        </div>
        <div className="flip-card-back">
          {header}
          {children[1]}
        </div>
      </div>
    </div> 
  );
};

export default Card;
