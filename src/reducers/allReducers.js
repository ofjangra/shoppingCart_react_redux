import data from "../ProductsData";
const initState = [];
const initCartCount = 0;
const updateProducts = (state = data, action) => {
  switch (action.type) {
    case "showProducts":
      return state;
    case "itemRemoved":
      action.val.addedToCart = false;
      return state;
    default:
      return state;
  }
};

const updateItems = (state = initState, action) => {
  switch (action.type) {
    case "addItemToCart":
      action.val.addedToCart = true;
      action.val.quantity = 1;
      state.splice(0, 0, action.val);
      return state;
    case "removeCartItem":
      let newArr = state.filter((item) => item.id !== action.id);
      return newArr;
    default:
      return state;
  }
};

const updateCartCount = (state = initCartCount, action) => {
  switch (action.type) {
    case "addCartCount":
      return state + 1;
    case "cartCountDec":
      return state - 1;
    default:
      return state;
  }
};

const updateItemCount = (state = 1, action) => {
  switch (action.type) {
    case "incItemCount":
      return (action.val.quantity += 1);
    case "decItemCount":
      return (action.val.quantity -= 1);
    default:
      return state;
  }
};

export default updateItems;
export { updateCartCount };

export { updateProducts };

export { updateItemCount };
