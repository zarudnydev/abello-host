import { ProductsResponseAPI } from '@/types/product';
import { api } from './api';

export const productService = {
  getProducts: () => api.get<ProductsResponseAPI>('/products?limit=12'),
};
