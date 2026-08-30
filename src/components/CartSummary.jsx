import useCartStore from "../stores/cartStore"

function CartSummary() {
    const items = useCartStore((state) => state.cartItems)
    
    const totalItems = items.reduce((total, item) => total + item.quantity, 0)
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
            <h2>Cart Summary</h2>
            <p>Total Items: {totalItems}</p>
        </div>
    );
}

export default CartSummary;