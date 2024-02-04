import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../Store/CartContex";
import UserProgressContext from "../Store/UserProgressContext";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItem = cartCtx.items.length;

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="reactfood logo" />
          <h1>reactfood</h1>
        </div>
        <Button onClick={handleShowCart} textOnly>
          cart({totalCartItem})
        </Button>
      </div>
    </>
  );
}

export default Header;
