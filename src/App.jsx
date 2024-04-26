import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CreateCartContextProvider from "./contextStore/shopping-cart-context.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <CreateCartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CreateCartContextProvider>
  );
}

export default App;
