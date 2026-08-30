import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useCartStore = create(
    devtools(
        persist(
            (set) => ({

    cartItems: [],


    addItemToCart: (item) => set((state) => {
        const existingItem = state.cartItems.find((cartItem) => cartItem.productId === item.productId);
        if (existingItem) {
            const updatedCartItems = state.cartItems.map((cartItem) =>
                cartItem.productId === item.productId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            return { cartItems: updatedCartItems };
        }
        else { 
            const newCartItem = { ...item, quantity: 1 };   
            const updatedCartItems = [...state.cartItems, newCartItem];
            return { cartItems: updatedCartItems };
        }
    }),

    removeItemFromCart: (productId) => set((state) => {
        const updatedCartItems = state.cartItems.filter((cartItem) => cartItem.productId !== productId);
        return { cartItems: updatedCartItems };
    }),

    updateItemQuantity: (productId, quantity) => set((state) => {
        if (quantity <= 0) {
            const updatedCartItems = state.cartItems.filter((cartItem) => cartItem.productId !== productId);
            return { cartItems: updatedCartItems };
        } else {
            const updatedCartItems = state.cartItems.map((cartItem) =>
                cartItem.productId === productId
                    ? { ...cartItem, quantity }
                    : cartItem
            );
            return { cartItems: updatedCartItems };
        }
    }),
    clearCart: () => set({ cartItems: [] }),
            }),
            {
                name: "cart-storage", // name of the item in storage
            }
        )
    )
);

export default useCartStore;

