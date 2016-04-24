import React from 'react';

const Cart = React.createClass({

   getInitialState() {
     EVT.on('cart.added', this.addItem);
     return {
         items: [],
         active_policies : [],
         total: 0,
         currency: 'EUR',
         settings : this.props.setup
     };
   },
   componentDidMount(){
      // setup calculatοr with settings
      var that = this;
      this.state.settings.map(function(policy, i){
         if(policy.enabled === true){
            that.state.active_policies.push(policy);
         }
      })
      console.log(this.state.active_policies);
   },
   addItem(item) {
      this.state.items.push(item);

      this.calculateTotal();
      this.forceUpdate();
   },
   removeItem(){
      var item = arguments[0];
      var itemIndex = arguments[1];
      var evt = arguments[2];
      var args = this.state.active_policies;

      for (var x = 0; x < args.length; x += 1){
         args[x].count = 0;
      }
      delete this.state.items[itemIndex];
      this.calculateTotal();
   },
   calculateTotal(){

      var total = 0;
      var args = this.state.active_policies;
      var count = 0;

      this.state.items.map(function(item, i){
         // add
         total += parseFloat(item.price);
         // discount
          for (var x = 0; x < args.length; x += 1){
            if(item.code === args[x].code){
               if(args[x].count >= args[x].rate){
                  total -= parseFloat(item.price);
                  total += parseFloat(item.price * ( 1 - parseFloat(args[x].discount )))
               }
               args[x].count += 1;
            }
         }
      });

      this.setState({
         total : total
      })

   },

   render () {
      var that = this;
      var products = this.state.items.map(function(item, i){
         //console.log(item);
         return (
            <div key={i} className="cart-item">
               <div className="item-text">{item.name}</div>
               <div className="item-price">{item.price}</div>
               <button className="btn btn-error item-remove" onClick={that.removeItem.bind(that, item, i)}>x</button>
            </div>
         )
      })
      return (
         <div className="panel cart">
            <div className="cart-inner">
               <span className="cart-summary">{this.state.total}</span>
               {products}
            </div>
         </div>
      )
  }
})

export default Cart
