import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProducts } from "./actions/index";
import { addItemToCart } from "./actions/index";
import { addCartCount } from "./actions/index";
import reactDom from "react-dom";
import CloseIcon from "@material-ui/icons/Close";
const Products = () => {
  let productInit = useSelector((state) => state.updateProducts);
  let initState = useSelector((state) => state.updateItems);
  const disptach = useDispatch();
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState();

  useEffect(() => {
    disptach(showProducts());
    setProduct(productInit);
  }, [productInit, initState, disptach]);

  let dispatchItem = (e) => {
    if (e.addedToCart === false) {
      disptach(addItemToCart(e));
      disptach(addCartCount());
    } else {
      alert("Item Already Added to cart");
    }
  };

  const showModal = (e) => {
    setModal(
      <>
        <div className="modal">
          <div className="closeModal">
            <CloseIcon onClick={() => setModal()} />
          </div>
          <div className="modalImg">
            <img src={e.product_img} alt={e.alt} />
          </div>
          <div className="modalDesc">
            <div className="modalDetails">
              <h1>{e.desc}</h1>
              <strong>{e.price}</strong>
            </div>
            {e.addedToCart === false ? (
              <button onClick={() => dispatchItem(e)}>Add to Cart</button>
            ) : (
              <p>Item added to cart</p>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="products">
        {product.map((val) => {
          return (
            <div
              className="product"
              key={val.id}
              onClick={() => showModal(val)}
            >
              <div className="productImg">
                <img src={val.product_img} alt={val.alt} />
              </div>
              <div className="productDetails">
                <div className="productDesc">
                  <p>{val.desc}</p>
                </div>
                <div className="productPrice">
                  <strong>{val.price}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {reactDom.createPortal(modal, document.getElementById("root"))}
    </>
  );
};

export default Products;
