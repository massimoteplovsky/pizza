import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const addToCart = createAction('cart/addToCart');
export const clearCart = createAction('cart/clearCart');
export const addItem = createAction('cart/addItem');
export const deleteItems = createAction('cart/deleteItems');
export const deleteItem = createAction('cart/deleteItem');

const initialState = {
  cartItems: [],
};

// Reducer
const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, ({ cartItems }, { payload }) => {
      cartItems.push(payload);
    })
    .addCase(addItem, ({ cartItems }, { payload }) => {
      cartItems.push(payload);
    })
    .addCase(deleteItems, (state, { payload }) => {
      state.cartItems = state.cartItems.filter(({ id, size, type }) => {
        const itemId = `${id}${size}${type}`;
        const itemToDeleteId = `${payload.id}${payload.size}${payload.type}`;
        return itemId !== itemToDeleteId;
      });
    })
    .addCase(deleteItem, (state, { payload }) => {
      const itemToDeleteId = `${payload.id}${payload.size}${payload.type}`;
      const itemIndex = state.cartItems.findIndex(({ id, size, type }) => {
        const itemId = `${id}${size}${type}`;
        return itemId === itemToDeleteId;
      });

      if (itemIndex === -1) return;

      state.cartItems = [
        ...state.cartItems.slice(0, itemIndex),
        ...state.cartItems.slice(itemIndex + 1),
      ];
    })
    .addCase(clearCart, () => initialState)
    .addDefaultCase((state) => state);
});

// Selectors
const selectCartItems = ({ cart }) => cart.cartItems;

export const selectTotalPrice = createSelector(selectCartItems, (pizzas) =>
  pizzas.reduce((acc, { price }) => acc + price, 0)
);

export const selectCombinedPizzas = createSelector(
  selectCartItems,
  (cartItems) =>
    Object.values(
      cartItems.reduce((acc, pizza) => {
        const { id, size, type } = pizza;
        const key = `${id}${size}${type}`;
        if (!acc[key]) {
          acc[key] = [pizza];
          return acc;
        }

        acc[key].push(pizza);
        return acc;
      }, {})
    )
);

export default cartReducer;
