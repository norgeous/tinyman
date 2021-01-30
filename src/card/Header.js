import { IoMdSwap } from 'react-icons/io';

import './Header.css';

const Header = ({title, icon: Icon, onClickFlip}) => (
  <header>
    <div className="left">
      <Icon size="30" />
    </div>
    <div className="right">
      <button onClick={onClickFlip}>
        <IoMdSwap size="30" />
      </button>
    </div>
    <div className="title">{title}</div>
  </header>
);

export default Header;
