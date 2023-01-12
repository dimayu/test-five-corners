import { Link } from 'react-router-dom';

import './BreadCrumbs.scss';

export const BreadCrumbs = () => {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <Link to="/" className="breadcrumbs__item--link">
          Главная
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <span className="breadcrumbs__item--span">Оформление заказа</span>
      </li>
    </ul>
  );
}