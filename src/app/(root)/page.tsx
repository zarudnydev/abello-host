import styles from './page.module.scss'
import ProductList from '@/components/product/ProductList/ProductList'

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList />
    </main>
  )
}
