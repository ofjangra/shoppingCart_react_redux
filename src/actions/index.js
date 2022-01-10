export const showProducts = () => {
  return {
    type: "showProducts",
  };
};

export const addItemToCart = (val) => {
  return {
    type: "addItemToCart",
    val: val,
  };
};

export const incItemCount = (val) => {
  return {
    type: "incItemCount",
    val: val,
  };
};

export const decItemCount = (val) => {
  return {
    type: "decItemCount",
    val: val,
  };
};

export const resetItemCount = (val) => {
  return {
    type: "resetItemCount",
    val: val,
  };
};

export const removeCartItem = (id) => {
  return {
    type: "removeCartItem",
    id: id,
  };
};

export const itemRemoved = (val) => {
  return {
    type: "itemRemoved",
    val: val,
  };
};

export const addCartCount = () => {
  return {
    type: "addCartCount",
  };
};
export const cartCountDec = () => {
  return {
    type: "cartCountDec",
  };
};
