import { Link } from 'react-router-dom';
import { Navigation, SvgSprite } from '../../Components/index';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__items">
          <Navigation/>
          <div className="header__items__logo">
            <Link to="/">
              <SvgSprite id={"logo"}/>
            </Link>
          </div>
          <div className="header__items__right">
            <div className="header__items__right__item">
              <SvgSprite id={"search"}/>
            </div>
            <Link to="user" className="header__items__right__item">
              <SvgSprite id={"user"}/>
            </Link>
            <Link to="favorites" className="header__items__right__item">
              <SvgSprite id={"favorites"}/>
            </Link>
            <Link to="basket" className="header__items__right__item">
              <SvgSprite id={"basket"}/>
              <div className="header__items__right__item--indicator">
                1
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}