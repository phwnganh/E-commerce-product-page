import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],
            total: 0,

            addToCart: (product, quantity) =>
                set((state) => {
                    if (quantity === 0) return state;

                    const existingItem = state.cartItems.find(
                        (item) => item.id === product.id
                    );

                    let updatedCartItems;

                    if (existingItem) {
                        updatedCartItems = state.cartItems.map((item) =>
                            item.id === product.id
                                ? {
                                    ...item,
                                    quantity: item.quantity + quantity, // ✅ fix
                                }
                                : item
                        );
                    } else {
                        updatedCartItems = [
                            ...state.cartItems,
                            { ...product, quantity },
                        ];
                    }

                    const total = updatedCartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );

                    return {
                        cartItems: updatedCartItems, // ✅ fix key
                        total,
                    };
                }),

            removeCartItems: (id) =>
                set((state) => {
                    const updatedCartItems = state.cartItems.filter(
                        (item) => item.id !== id
                    );

                    const total = updatedCartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );

                    return {
                        cartItems: updatedCartItems, // ✅ fix key
                        total,
                    };
                }),

            clearCartItems: () =>
                set({
                    cartItems: [], // ✅ fix key
                    total: 0,
                }),
        }),
        {
            name: "cart-storage",
        }
    )
);