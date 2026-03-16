import Image from 'next/image'
import { Product } from '@/types/product'
import Button from '@/components/ui/Button/Button'
import styles from './ProductCard.module.scss'
import AuthGuard from '@/components/auth/AuthGuard/AuthGuard'

interface ProductCardProps {
  product: Product
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price}</p>
        <AuthGuard>
          <Button className={styles.addToCard}>Add to cart</Button>
        </AuthGuard>
      </div>
    </div>
  )
}
