import { shape, number, arrayOf, string } from 'prop-types';

export const PropValidator = {
  PIZZA: shape({
    id: number.isRequired,
    image: string.isRequired,
    name: string.isRequired,
    types: arrayOf(number.isRequired).isRequired,
    sizes: arrayOf(number.isRequired).isRequired,
    price: number.isRequired,
    category: arrayOf(string.isRequired).isRequired,
    rating: number.isRequired,
  }),
  PIZZA_IN_CART: shape({
    id: number.isRequired,
    image: string.isRequired,
    name: string.isRequired,
    type: number.isRequired,
    size: number.isRequired,
    price: number.isRequired,
    category: arrayOf(string.isRequired).isRequired,
    rating: number.isRequired,
  }),
};
