import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import './Card.css';

import { IoSyncCircle } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";

const Card = ({status, children}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => setIsFlipped(!isFlipped);

  const statusDisplay = {
    default: <>{status}</>,
    loading: <IoSyncCircle size="20" />,
    error: <div style={{color:'red', fontWeight:'bold'}}>error</div>,
  };

  return (
    <div className="card">
      <div className="status">
        {statusDisplay[status] || statusDisplay['default']}
      </div>
      
      <div className="controls">
        <button onClick={flipCard}><IoMdSwap size="20" /></button>
      </div>

      <ReactCardFlip isFlipped={isFlipped}>
        {children}
      </ReactCardFlip>
    </div>
  );
};

export default Card;
