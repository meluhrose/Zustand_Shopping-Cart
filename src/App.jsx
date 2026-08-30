import CartDisplay from "./components/CartDisplay";
import CartSummary from "./components/CartSummary";
import ProductAdder from "./components/ProductAdder";

function App() {
    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <h1>Shopping Cart Testing</h1>
          <ProductAdder />
            <CartDisplay />
            <CartSummary />
        </div>
    );
}

export default App;