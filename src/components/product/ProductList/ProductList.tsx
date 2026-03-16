'use client';

import { useProductsStore } from '@/stores/productsStore';
import { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.scss';
import Loader from '@/components/ui/Loader/Loader';

export default function ProductList() {
  const { products, isLoading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading)
    return (
      <div className={styles.container}>
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
