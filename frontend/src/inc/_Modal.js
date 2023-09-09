import React from 'react'

import { connect } from 'react-redux';
import store from '../store';
import { RemoveFromCart } from '../Actions/actions';

const mapStateToProps = (state) =>{

    return {cart: state.CartReducer.cartItems}

}

export default connect(mapStateToProps)(class Modal extends React.Component {


    render() {

      

        return (
            <>
               <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header border-bottom">
                        <div class="text-start">
                            <h5 id="offcanvasRightLabel" class="mb-0 fs-4">Shop Cart</h5>
                            <small>Location in 382480</small>
                        </div>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">

                        <div class="">

                            <div class="alert alert-danger p-2" role="alert">
                                You’ve got FREE delivery. Start <a href="#!" class="alert-link">checkout now!</a>
                            </div>
                            <ul class="list-group list-group-flush">




                                 {this.props.cart == undefined ? "empty" : this.props.cart.map((data)=>{


                                    return (
<li class="list-group-item py-3 ps-0 border-bottom">

                                    <div class="row align-items-center">
                                        <div class="col-6 col-md-6 col-lg-7">
                                            <div class="d-flex">
                                                <img src="../assets/images/products/product-img-5.jpg" alt="Ecommerce"
                                                    class="icon-shape icon-xxl" />
                                                <div class="ms-3">

                                                    <a href="shop-single.html" class="text-inherit">
                                                        <h6 class="mb-0">{data.title}</h6>
                                                    </a>
                                        

                                                    <div class="mt-2 small lh-1"> <a href="#!" onClick={()=> store.dispatch(RemoveFromCart(data.product))} class="text-decoration-none text-inherit"> <span
                                                        class="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                            class="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></span><span  class="text-muted">Remove</span></a></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-4 col-md-3 col-lg-3">


                                            <div class="input-group input-spinner  ">
                                                <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity" />
                                                <input type="number" step="1" max="10" value="1" name="quantity"
                                                    class="quantity-field form-control-sm form-input   " />
                                                <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity" />
                                            </div>
                                        </div>

                                        <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                            <span class="fw-bold">$15.00</span>
                                            <div class="text-decoration-line-through text-muted small">$25.00</div>
                                        </div>
                                    </div>

                                </li>
                                    )

                                 })}   

                                






                            </ul>

                            <div class="d-flex justify-content-between mt-4">
                                <a href="#!" class="btn btn-primary">Continue Shopping</a>
                                <a href="#!" class="btn btn-dark">Update Cart</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content p-4">
                            <div class="modal-header border-0">
                                <h5 class="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="fullName" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="fullName" placeholder="Enter Your Name" required="" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter Email address" required="" />
                                    </div>

                                    <div class="mb-5">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter Password" required="" />
                                        <small class="form-text">By Signup, you agree to our <a href="javascript:void(0)">Terms of Service</a> & <a
                                            href="javascript:void(0)">Privacy Policy</a></small>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Sign Up</button>
                                </form>
                            </div>
                            <div class="modal-footer border-0 justify-content-center">

                                Already have an account? <a href="#">Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
})

