/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './headerImage.css';
import headerImage from '../../resources/header-image.png';

const Header = ({ headTitle }) => (
  <div className="homePage-header-container">
    <header className="homepage-header-header">
      <div className="homepage-header-main-heading">
        {headTitle}
        {/* <br className="desktop-br" /> Repository */}
      </div>
      <img className="homepage-header-main-img" src={headerImage} alt="header" />
    </header>
  </div>
);

export default Header;
