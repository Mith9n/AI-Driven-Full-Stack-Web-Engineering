import { Suspense } from 'react'
import './App.css'
import type { ProductType } from './Components/Type'
import Products from './Components/Products'

const ProductsPromise: Promise<ProductType[]> = fetch(
  'https://fakestoreapi.com/products'
).then((response) => response.json())

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Products ProductsPromise={ProductsPromise} />
      </Suspense>
    </>
  )
}

export default App