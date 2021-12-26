import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { PropValidator } from '../utils/prop-validator';
import { ReactComponent as Plus } from '../images/plus.svg';
import { DOUGH_TYPES, PIZZA_SIZES } from '../utils/constants';
import { addToCart } from '../state/modules/cart';

const PizzaBlock = ({ pizza }) => {
  const { id, image, name, types, sizes, price } = pizza;
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(price);
  const { cartItems } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const handleCurrentPrice = (index) => {
    switch (PIZZA_SIZES[index]) {
      case 30:
        return setCurrentPrice(Math.ceil(price + price * 0.2));
      case 40:
        return setCurrentPrice(Math.ceil(price + price * 0.4));
      default:
        return setCurrentPrice(price);
    }
  };

  const handleActiveSize = (index) => {
    setActiveSize(index);
    handleCurrentPrice(index);
  };

  const handleAddToCart = () => {
    const { sizes, types, ...rest } = pizza;
    const pizzaData = {
      ...rest,
      size: activeSize,
      type: activeType,
      price: currentPrice,
    };

    dispatch(addToCart(pizzaData));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {DOUGH_TYPES.map((type, index) => (
            <li
              key={index}
              className={cn({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
              onClick={() => setActiveType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {PIZZA_SIZES.map((pizzaSize, index) => (
            <li
              key={index}
              className={cn({
                active: activeSize === index,
                disabled: !sizes.includes(PIZZA_SIZES[index]),
              })}
              onClick={() => handleActiveSize(index)}
            >
              {pizzaSize}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price"> {currentPrice} ₽</div>
        <div className="button button--outline button--add">
          <Plus />
          <span onClick={handleAddToCart}>Добавить</span>
          <i>{cartItems.filter((item) => item.id === id).length}</i>
        </div>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  pizza: PropValidator.PIZZA.isRequired,
};

export default PizzaBlock;
