import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/cart-item';
import { ReactComponent as CartIcon } from '../images/cart-icon.svg';
import { ReactComponent as TrashIcon } from '../images/trash.svg';
import { ReactComponent as BackIcon } from '../images/back-icon.svg';
import emptyCartImg from '../images/empty-cart.png';
import { clearCart } from '../state/modules/cart';
import { selectTotalPrice, selectCombinedPizzas } from '../state/modules/cart';

// Components
import Button from '../components/button';

const Cart = () => {
  const { cartItems } = useSelector(({ cart }) => cart);
  const totalPrice = useSelector(selectTotalPrice);
  const combinedPizzas = useSelector(selectCombinedPizzas);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="content">
      <div className="container container--cart">
        {combinedPizzas.length ? (
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <CartIcon />
                Корзина
              </h2>
              <div className="cart__clear">
                <TrashIcon />
                <span onClick={handleClearCart}>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {combinedPizzas.map((item, index) => (
                <CartItem
                  key={item[0].name + index}
                  cartItem={item[0]}
                  quantity={item.length}
                  totalPrice={item.reduce((acc, { price }) => acc + price, 0)}
                />
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  {' '}
                  Всего пицц: <b>{cartItems.length} шт.</b>{' '}
                </span>
                <span>
                  {' '}
                  Сумма заказа: <b>{totalPrice} ₽</b>{' '}
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/">
                  <Button
                    className="button--outline button--add go-back-btn"
                    outline
                  >
                    <BackIcon />
                    <span>Вернуться назад</span>
                  </Button>
                </Link>
                <Button className="pay-btn">Оплатить сейчас</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <i>😕</i>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCartImg} alt="Empty cart" />
            <Link to="/">
              <Button
                className="button--outline button--add go-back-btn"
                outline
              >
                <BackIcon />
                <span>Вернуться назад</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
