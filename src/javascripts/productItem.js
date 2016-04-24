import React from 'react';

const ProductItem = React.createClass({
   getInitialState(){
      return {
         added : false
      }
   },
   addToCart(){
     this.setState({
       added: true
     });

     EVT.emit('cart.added', this.props);
   },
   render () {
    return (
      <div className="product-item">
         <div className="thumbnail">
            <img src={this.props.img} className="img-responsive" />
            <div className="caption">
               <h3>{this.props.name}</h3>
               <small>{this.props.code}</small>
               <p className="lead"><strong>{this.props.price} €</strong></p>
               <button className="btn btn-primary" onClick={this.addToCart}>Add to Cart</button>
            </div>
         </div>
      </div>
    )
   }
})

export default ProductItem
