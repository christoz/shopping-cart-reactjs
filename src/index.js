var products = [
   {
      code : 'FR1',
      name : 'Fruit tea',
      price : 3.11,
      img : 'http://herbaliatea.com/image/cache/data/canadian-berries-fruit-tea-950x555.jpg'
   },
   {
      code : 'SR1',
      name : 'Strawberies',
      price : 5.00,
      img : 'https://heartuniverseorg.files.wordpress.com/2015/09/strawberry11.jpg'
   },
   {
      code : 'CF1',
      name : 'Coffee',
      price : 11.23,
      img : 'http://cdn.shopify.com/s/files/1/1011/4682/products/Loumidis_2x200gm_grande.jpg?v=1456546969'
   }

];

// Pricing Rules
var pricing_rules = {
   buyOneGetOneFree : {
      code : 'FR1',
      enabled : true
   },
   bulkPurchase : {
      code : 'SR1',
      bulkNum : '3',
      discount : '0.1'
   }
}

var settings = [
   {
      type : 'CEO',
      code : 'FR1',
      enabled : true,
      discount : '0.5',
      rate : 2,
      count : 0
   },
   {
      type : 'CTO',
      code : 'SR1',
      enabled : true,
      discount : '0.1',
      rate : 3,
      count : 0
   }
]

import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter2 from 'eventemitter2';
import ProductList from './javascripts/productsList';
import Cart from './javascripts/cart';

window.EVT = new EventEmitter2();

const Container = React.createClass({
   ComponentDidMount() {

   },
   render() {
      return (
         <div className="row">
            <div className="l-product">
               <ProductList items={products} />
            </div>
            <div className="l-cart">
               <Cart setup={settings} />
            </div>
         </div>
      )
   }
})

ReactDOM.render(<Container />, document.querySelector('#main'));
