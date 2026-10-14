import { create } from 'zustand'

const useCard = create((set) => ({
  cart:[],
  addCart: (product) => set((state) => ({ cart:[...state.cart,product]})),
  removeAllcarts: () => set({ cart: [] }),
  // updatecart: (newCart) => set({ cart: newCart }),
}))
export default useCard;