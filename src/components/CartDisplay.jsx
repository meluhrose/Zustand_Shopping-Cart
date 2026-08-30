import useCartStore from "../stores/cartStore";

function CartDisplay() {
    const items = useCartStore((state) => state.cartItems);

    const removeItem = useCartStore((state) => state.removeItemFromCart);
    const updateQuantity = useCartStore((state) => state.updateItemQuantity);

    if (items.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.productId} style={{ marginBottom: "10px", border: "1px solid #259e25", padding: "10px" }}>
                        <span> Product ID: {item.productId}</span>
                        <br />
                        <span> Quantity: {item.quantity}</span>
                        <br />
                        <button onClick={() => removeItem(item.productId)}>Remove</button>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)}>+</button>
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CartDisplay;