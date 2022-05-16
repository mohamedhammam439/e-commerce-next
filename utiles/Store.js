import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
    // cartItems: [],
    shippingAddress: Cookies.get("shippingAddress")
    ? JSON.parse(Cookies.get("shippingAddress"))
    : {},
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "REMOVE_CART_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "INCREMENT": {
      // console.log('increse')
      const cartItems = state.cart.cartItems;
      console.log("action.payload", action);
      cartItems.forEach((item) => {
        if (item._id === action.payload._id) {
          item.quantity++;
        }
      });
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "DECREMENT": {
      // console.log('decrement')
      const cartItems = state.cart.cartItems;
      console.log("action.payload", action.payload);
      cartItems.forEach((item) => {
        if (item._id === action.payload._id) {
          item.quantity--;
        }
      });
      return { ...state, cart: { ...state.cart, cartItems } };
    }
     case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state, cart: { ...state.cart, shippingAddress: action.payload },
      };
    // case "SAVE_PAYMENT_METHOD":
    //   return {
    //     ...state, cart: { ...state.cart, paymentMethod: action.payload },
    //   };
    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}