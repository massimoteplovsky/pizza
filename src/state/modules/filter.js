import { createAction, createReducer } from '@reduxjs/toolkit';

export const changeCategory = createAction('filter/changeCategory');
export const changeSortBy = createAction('filter/changeSortBy');

const initialState = {
  activeCategory: null,
  sortBy: 'rating',
};

// Reducer
const filterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCategory, (state, { payload }) => {
      state.activeCategory = payload;
    })
    .addCase(changeSortBy, (state, { payload }) => {
      state.sortBy = payload;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

// Selectors
export const selectActiveCategory = ({ filter }) => filter.activeCategory;
export const seletSortType = ({ filter }) => filter.sortBy;

export default filterReducer;
