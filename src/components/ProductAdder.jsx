import useCartStore from "../stores/cartStore";

function ProductAdder() {
    const addItem = useCartStore((state) => state.addItemToCart);

    return (
        <div style={{ marginTop: "20px" }}>
            <button onClick={() => addItem({ productId: "product1" })}>Add Product 1</button>
            <button onClick={() => addItem({ productId: "product2" })}>Add Product 2</button>
        </div>
    );
}

export default ProductAdder;