import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeCartItem } from "./actions/index";
import { cartCountDec } from "./actions/index";
import { itemRemoved } from "./actions/index";
import { incItemCount, decItemCount } from "./actions/index";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
  let initState = useSelector((state) => state.updateItems);
  let cartInitCount = useSelector((state) => state.updateCartCount);
  useSelector((state) => state.updateItemCount);
  let dispatch = useDispatch();

  let cart = useRef(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(initState);
  }, [initState]);

  const showCart = () => {
    cart.current.classList.toggle("show_cart");
  };

  let dispatchFunc = (id, val) => {
    dispatch(removeCartItem(id));
    setCartItems(initState);
    dispatch(cartCountDec());
    dispatch(itemRemoved(val));
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>Of MEN</h1>
        </div>
        <div className="cartIcon">
          <span className="productCount">{cartInitCount}</span>
          <ShoppingCartIcon onClick={showCart} />
        </div>
        <div className="cart" ref={cart}>
          {cartItems.map((val) => {
            return (
              <div className="cartProduct" key={val.id}>
                <div className="cartProductCard">
                  <div className="CartImg">
                    <img src={val.product_img} alt={val.alt} />
                  </div>
                  <div className="CartProductDetails">
                    <p>{val.desc}</p>
                    <strong>{val.price}</strong>
                    <div className="CartProductQuantity">
                      <p>Quantity: {val.quantity}</p>
                      <div className="QuantityControlers">
                        {val.quantity === 1 ? (
                          <span
                            style={{
                              fontSize: "28px",
                              fontWeight: "bold",
                              cursor: "pointer",
                              opacity: "10%",
                            }}
                          >
                            -
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: "28px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                            onClick={() => dispatch(decItemCount(val))}
                          >
                            -
                          </span>
                        )}

                        {val.quantity < 5 ? (
                          <span
                            style={{
                              fontSize: "28px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                            onClick={() => dispatch(incItemCount(val))}
                          >
                            +
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: "28px",
                              fontWeight: "bold",
                              cursor: "pointer",
                              opacity: "10%",
                            }}
                          >
                            +
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={() => dispatchFunc(val.id, val)}>
                  Remove
                </button>
              </div>
            );
          })}
          {initState.length === 0 ? (
            <p>Cart is Empty</p>
          ) : (
            <button onClick={() => alert(initState)}>Place Order</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
