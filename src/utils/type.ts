export type CartItemType = {
    id: string;
    title: string;
    desc: string;
    isVeg: Boolean
    img?: string;
    price: number;
    quantity: number;
};

export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
};

export type ActionTypes = {
    addToCart: (item: CartItemType) => void;
    removeFromCart: (item: CartItemType) => void;
}