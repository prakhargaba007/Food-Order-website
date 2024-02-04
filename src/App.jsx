import Cart from "./Components/Cart";
import Checkout from "./Components/CheckOut";
import Header from "./Components/Header";
import Meal from "./Components/Meal";
import { CartContextProvider } from "./Store/CartContex";
import { UserProgressContextProvider } from "./Store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meal />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
