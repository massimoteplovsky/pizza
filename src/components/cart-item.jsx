import React from 'react';
import pt from 'prop-types';
import { useDispatch } from 'react-redux';
import { PropValidator } from '../utils/prop-validator';
import { ReactComponent as MinusIcon } from '../images/minus.svg';
import { ReactComponent as PlusIcon } from '../images/plus.svg';
import { ReactComponent as DeleteIcon } from '../images/delete.svg';
import { DOUGH_TYPES, PIZZA_SIZES } from '../utils/constants';
import { addItem, deleteItems, deleteItem } from '../state/modules/cart';

// Components
import Button from './button';

const CartItem = ({ cartItem, quantity, totalPrice }) => {
  const { size, type, name } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {DOUGH_TYPES[type]} тесто, {PIZZA_SIZES[size]} см.
        </p>
      </div>
      <div className="cart__item-count">
        <Button
          className="button--outline button--circle cart__item-count-minus"
          outline={true}
          onClick={() => dispatch(deleteItem(cartItem))}
        >
          <MinusIcon />
        </Button>
        <b>{quantity}</b>
        <Button
          className="button--outline button--outline button--circle cart__item-count-plus"
          outline={true}
          onClick={() => dispatch(addItem(cartItem))}
        >
          <PlusIcon />
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} ₽</b>
      </div>
      <div className="cart__item-remove">
        <Button
          className="button--outline button--outline button--circle"
          outline={true}
          onClick={() => dispatch(deleteItems(cartItem))}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropValidator.PIZZA_IN_CART.isRequired,
  quantity: pt.number.isRequired,
  totalPrice: pt.number.isRequired,
};

export default CartItem;
