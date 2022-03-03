import { combineReducers } from "redux";

import updateItems from "./allReducers";
import { updateCartCount } from "./allReducers";
import { updateProducts } from "./allReducers";
import { updateItemCount } from "./allReducers";

const rootreducer = combineReducers({
  updateItems,
  updateCartCount,
  updateProducts,
  updateItemCount,
});
export default rootreducer;
