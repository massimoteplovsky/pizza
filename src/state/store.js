import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Reducers
import pizzaReducer from './modules/pizza';
import cartReducer from './modules/cart';
import filterReducer from './modules/filter';

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
