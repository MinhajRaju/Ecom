import React from "react";

import { connect } from "react-redux";
import store from '../store';
import { RemoveFromCart } from '../Actions/actions';
import {  Form } from 'react-bootstrap'
import { AddToCart } from "../Actions/actions";

const mapStateToProps =  (state) =>{

        return {cart: state.CartReducer.cartItems}
}


export default connect(mapStateToProps)(class ShopCart extends React.Component{


    render(){

        return (
            <>
             <main>
  

  <section class="mb-lg-14 mb-8 mt-8">
    <div class="container">

    <div class="row">
        <div class="col-12">

          <div class="card py-1 border-0 mb-8">
            <div>
              <h1 class="fw-bold">Cart </h1>
              
          
              
           
             
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8 col-md-7">

          <div class="py-3">
        

        
         <ul class="list-group list-group-flush"  style={{border:"1px solid #e9e9e9"}} >
          
             
            
      
           

                
                

            {this.props.cart == undefined ? "empty"  : this.props.cart.length == 0 ? (

<div class="row">
        <div class="col-12">

          <div class="card py-1 border-0 mb-8">
            <div>
              <h1 class="fw-bold" style={{textAlign:"center" , fontSize:"x-larger" , textTransform:"uppercase"}}>   <a href="/">Continue Shopping?</a> </h1>
              
          
              
           
             
            </div>
          </div>
        </div>
      </div>

            ) :  this.props.cart.map((data)=>{


return (
       
              <li class="list-group-item py-3 py-lg-0 px-0 border-top">
           
                <div class="row align-items-center">
                  <div class="col-3 col-md-2">
                     <img src="../assets/images/products/product-img-1.jpg" alt="Ecommerce"
                      class="img-fluid" /></div>
                  <div class="col-4 col-md-5">
     
                    <a href="shop-single.html" class="text-inherit"><h6 class="mb-0">{data.title}</h6></a>
                    <span><small class="text-muted">.98 / lb</small></span>
          
                    <div class="mt-2 small lh-1"> <a href="#!"  onClick={()=> store.dispatch(RemoveFromCart(data.product))}  class="text-decoration-none text-inherit"> <span
                          class="me-1 align-text-bottom">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-trash-2 text-success">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                            </path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg></span><span class="text-muted">Remove</span></a></div>
                  </div>
              
                  <div class="col-3 col-md-3 col-lg-2">
             
                  <div class="input-group input-spinner  ">
                    
                    <Form.Control
                                                                        as="select"
                                                                        value={data.pqty}
                                                                        onChange={(e) => store.dispatch(AddToCart(data.slug, data.variation , Number(e.target.value)))}

                                                                    >
                                                                        {

                                                                            [...Array(data.qty).keys()].map((x) => (
                                                                                <option key={x + 1} value={x + 1}>
                                                                                    {x + 1}
                                                                                </option>
                                                                            ))
                                                                        }

                                                                    </Form.Control>
                   
                  </div>


                  </div>
               
                  <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span class="fw-bold">$5.00</span>

                  </div>
                </div>

              </li>

)

})}   


             

            </ul>
       
<div class="d-flex justify-content-between mt-4">
              <a href="" ></a>
              <a href="/checkout/" >Go to Checkout</a>
              
                  
            </div>
          

          </div>
        </div>

  
        <div class="col-12 col-lg-4 col-md-5">

          <div class="mb-5 card mt-6">
            <div class="card-body p-6">
         
              <h2 class="h5 mb-4">Summary</h2>
              <div class="card mb-2">
        
                <ul class="list-group list-group-flush">
              
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                      <div>Item Subtotal</div>

                    </div>
                    <span>$70.00</span>
                  </li>

      
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                      <div>Service Fee</div>

                    </div>
                    <span>$3.00</span>
                  </li>
            
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="me-auto">
                      <div class="fw-bold">Subtotal</div>

                    </div>
                    <span class="fw-bold">$67.00</span>
                  </li>
                </ul>

              </div>
          
        
              <p><small>By placing your order, you agree to be bound by the Freshcart <a href="#!">Terms of Service</a>
                  and <a href="#!">Privacy Policy.</a> </small></p>

            
              <div class="mt-8">
                <h2 class="h5 mb-3">Add Promo or Gift Card</h2>
                <form>
                  <div class="mb-2">
                
                    <label for="giftcard" class="form-label sr-only">Email address</label>
                    <input type="text" class="form-control" id="giftcard" placeholder="Promo or Gift Card" />

                  </div>
                 
                  <div class="d-grid"><button type="submit" class="btn btn-outline-dark mb-1">Redeem</button></div>
                  <p class="text-muted mb-0"> <small>Terms & Conditions apply</small></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</main>
            
            </>
        )

    }


})