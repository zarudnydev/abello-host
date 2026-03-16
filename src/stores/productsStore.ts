import { create } from 'zustand';
import { Product } from '@/types/product';
import { mapProductToFront } from '@/utils/mappers';
import { getErrorMessage } from '@/utils/errorHandler';
import { productService } from '@/services/product';

interface ProductsState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const useProductsStore = create<ProductsState>((set) => ({
  ...initialState,
  fetchProducts: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await productService.getProducts();
      const products = response.data.products.map(mapProductToFront);
      set({ products, isLoading: false });
    } catch (error) {
      set({
        error: getErrorMessage(error),
        isLoading: false,
      });
    }
  },
  setProducts: (products) => set({ products }),
}));
