import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as CartIcon } from '../images/cart-icon.svg';
import { ReactComponent as Logo } from '../images/logo.svg';
import { RouterPath } from '../utils/constants';
import { selectTotalPrice } from '../state/modules/cart';

// Components
import Button from './button';

const Header = () => {
  const { cartItems } = useSelector(({ cart }) => cart);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="header">
      <div className="container">
        <Link to={RouterPath.HOME} className="header__logo">
          <Logo />
          <div className="logo__text">
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <div className="header__cart">
          <Link to={RouterPath.CART}>
            <Button className="button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <CartIcon />
              <span>{cartItems.length}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
