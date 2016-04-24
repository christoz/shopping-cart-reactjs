import React from 'react';
import ProductItem from './productItem';

const ProductList = React.createClass({

  render () {
   var products = this.props.items.map(function(item, i){
      return <ProductItem key={i} img={item.img} code={item.code} name={item.name} price={item.price} />
   });
    return (
      <div className='product-list clearfix'>
         {products}
      </div>
    )
  }
})

export default ProductList
