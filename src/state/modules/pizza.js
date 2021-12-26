import { createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { pizzas } from '../../utils/mock';
import { selectActiveCategory, seletSortType } from './filter';

const initialState = {
  pizzas: pizzas,
};

// Reducer
const pizzaReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state) => state);
});

// Selectors
const selectAllPizzas = (state) => state.pizza.pizzas;

const sortPizzasBy = (sortBy) => (a, b) => {
  if (sortBy === 'name') {
    return a[sortBy].localeCompare(b[sortBy]);
  }

  return a[sortBy] - b[sortBy];
};

export const selectCategories = createSelector(selectAllPizzas, (pizzas) => {
  return ['Все', ...new Set(pizzas.map((pizza) => pizza.category).flat())];
});

export const selectFilteredPizzas = createSelector(
  [selectAllPizzas, selectActiveCategory, seletSortType],
  (pizzas, category, sortBy) => {
    if (!category) {
      return [...pizzas].sort(sortPizzasBy(sortBy));
    }
    return [...pizzas]
      .filter((pizza) => pizza.category.includes(category))
      .sort(sortPizzasBy(sortBy));
  }
);

export default pizzaReducer;
