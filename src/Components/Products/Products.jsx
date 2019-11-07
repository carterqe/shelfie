import React from 'react'
import './Products.css'
import Product from './Product/Product'

const Products = props => (
  <div className="product-list">
    {
      props.products.map((product, index) => <Product 
      product={product} 
      key={index}
      products={props.products} 
      deleteHandler={(id) => props.deleteHandler(id)} 
      updateHandler={(product) => props.updateHandler(product)}/>)
    }
  </div>
)
export default Products;

