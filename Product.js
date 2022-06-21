// In this exercise he uses PropTypes by importing it from "prop-types" and PropTypes is used in this 
// example, to correct the fact that the API often does not have all the data we want. We will often deal 
// with worthless items, and even if 99% of the API is filled, just one item being missing can cause a big 
// problem in the application. So PropTypes serves to make a value type mandatory and return a value as default 
// in case data is missing. But in the example of the course, it tries to use a default image as an assets file 
// and as it is not an object (response defined as default and mandatory by PropTypes), the application also gives 
// an error, so it corrects this problem by creating the const url that does a short circuit evaluation where it 
// makes the url the default image only if it exists and another one if it doesn't, show the assets image, fixing 
// the bug.




import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
