import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.style.scss";
import { createStructuredSelector } from 'reselect'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectorCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectorCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
