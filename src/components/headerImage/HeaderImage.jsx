/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './headerImage.css';
import headerImage from '../../resources/header-image.png';

const Header = ({ headTitle }) => (
  <div className="homePage-header-container">
    <h1 className="homePage-header-text">{headTitle}</h1>
    <img src={headerImage} className="homePage-header-image" alt="homePage-headerImage"></img>
  </div>
);

export default Header;
