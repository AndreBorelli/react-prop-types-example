// In this part of the exercise, useFetch, a custom Hook created in the previous class, which fetch the 
// Rest API, is imported, and this page serves to render the Product, which is the function created with 
// PropTypes, solving the problem of missing certain data in the API.

import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'
// import defaultImage from '../../../assets/default-image.jpeg';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
