import { use } from 'react'
import type { ProductType } from './Type'
import './Products.css'

export interface ProductsProps {
  ProductsPromise: Promise<ProductType[]>
}

export default function Products({ ProductsPromise }: ProductsProps) {

  const products = use(ProductsPromise)

  return (
    <div className="products-container">

      <h1 className="products-title">Our Products</h1>

      <div className="products-grid">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <div className="product-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="product-info">

              <p className="product-category">
                {product.category}
              </p>

              <h2 className="product-title">
                {product.title}
              </h2>

              <p className="product-description">
                {product.description}
              </p>

              <div className="product-bottom">

                <div>
                  <h3 className="product-price">
                    ${product.price}
                  </h3>

                  <p className="product-rating">
                    ⭐ {product.rating.rate} ({product.rating.count})
                  </p>
                </div>

                <button className="cart-btn">
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}