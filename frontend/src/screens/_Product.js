import React from 'react'


import { connect } from "react-redux";
import store from '../store';
import { RelatedItemAction, SingleProductAction } from '../Actions/actions';
import { SellerProductShuffleAction } from '../Actions/actions';

import withRouter from './_Helper';

import ImageWithThumb from '../Sp_Inc/_Sp_Image_Thumb';
import ProductShuffle from '../Sp_Inc/_Sp_Shuffle';
import ProductCarousel from '../inc/_ProductCarousel';



const mapStateToProps = (state) => {
  
    return { SingleProductData: state.SingleProductReducer.SingleProductData , shuffleProductData:state.SellerProductShuffleReducer.SellerProductShuffleData ,RelatedItemData:state.RelatedItemReducer.RelatedItemData }

}

export default withRouter(connect(mapStateToProps)(class Product extends React.Component {

     

    constructor(props) {
        super(props)
        store.dispatch(SingleProductAction(this.props.params.slug))
        store.dispatch(RelatedItemAction(this.props.params.slug))
      
    }


    componentDidMount() {       
        setTimeout(() =>{
            store.dispatch(SellerProductShuffleAction(this.props.SingleProductData.seller))
        },3000)
    

    }

 


    

    render() {    
        
        


        return (


            <>
                <div class="mt-4">
                 
                </div>
                <section class="mt-8" >
                    <div class="container">
                        <div class="row" >
                            <ImageWithThumb data={this.props.SingleProductData}/>

                            
                            <div class="col-md-4" style={{ background: "white" }} >
                                <div class="row">



                                    <div class="col">

                                        <div class="card p-6 card-product">
                                            <div>
                                                <img src="https://freshcart.codescandy.com/assets/images/stores-logo/stores-logo-1.svg" alt=""
                                                    class="rounded-circle icon-shape icon-xl" />
                                            </div>
                                            <div class="mt-4">

                                                <h2 class="mb-1 h5"><a href="#!" class="text-inherit">E-Grocery Super Market</a></h2>
                                                <div class="small text-muted"><span class="me-2">Organic </span><span
                                                    class="me-2">Groceries</span>
                                                    <span>Butcher Shop</span>
                                                </div>
                                                <br />
                                                <div class="mt-2">
                                                    <span>Monthly revenue</span>
                                                    <h1 class=" mb-2 fw-bold fs-2">$93</h1>

                                                </div>
                                                <div>


                                                </div>


                                            </div>
                                        </div>



                                    </div>



                                </div>

                            </div>


                        </div>
                    </div>
                </section >

                <section class="mt-lg-14 mt-8 " >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <ul class="nav nav-pills nav-lb-tab" id="myTab" role="tablist">

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="product-tab" data-bs-toggle="tab"
                                            data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane"
                                            aria-selected="true">Product Details</button>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                            data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane"
                                            aria-selected="false">Reviews</button>
                                    </li>

                                </ul>

                                <div class="tab-content" id="myTabContent">

                                    <div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab"
                                        tabindex="0">
                                        <div class="my-4">
                                            <div class="mb-5">

                                                <h4 class="mb-1">Nutrient Value & Benefits</h4>
                                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna
                                                    bibendum
                                                    in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius
                                                    habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing
                                                    sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                            <div class="mb-5">
                                                <h5 class="mb-1">Storage Tips</h5>
                                                <p class="mb-0">Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed
                                                    magnis eu
                                                    nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum
                                                    netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </p>
                                            </div>

                                            <div class="mb-5">
                                                <h5 class="mb-1">Unit</h5>
                                                <p class="mb-0">3 units</p>
                                            </div>
                                            <div class="mb-5">
                                                <h5 class="mb-1">Seller</h5>
                                                <p class="mb-0">DMart Pvt. LTD</p>
                                            </div>
                                            <div>
                                                <h5 class="mb-1">Disclaimer</h5>
                                                <p class="mb-0">Image shown is a representation and may slightly vary from the actual product. Every
                                                    effort
                                                    is made to maintain accuracy of all information displayed.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
                                        <div class="my-4">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="me-lg-12 mb-6 mb-md-0">
                                                        <div class="mb-5">

                                                            <h4 class="mb-3">Customer reviews</h4>
                                                            <span>
                                                                <small class="text-warning"> <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-half"></i></small><span class="ms-3">4.1 out of 5</span><small
                                                                        class="ms-3">11,130 global ratings</small></span>
                                                        </div>
                                                        <div class="mb-8">

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">5</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }}
                                                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">53%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">4</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }}
                                                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">22%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">3</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "35%" }}
                                                                            aria-valuenow="35" aria-valuemin="0" aria-valuemax="35"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">14%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">2</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "22%" }}
                                                                            aria-valuenow="22" aria-valuemin="0" aria-valuemax="22"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">5%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">1</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "14%" }}
                                                                            aria-valuenow="14" aria-valuemin="0" aria-valuemax="14"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">7%</span>
                                                            </div>
                                                        </div>
                                                        <div class="d-grid">
                                                            <h4>Review this product</h4>
                                                            <p class="mb-0">Share your thoughts with other customers.</p>
                                                            <a href="#" class="btn btn-outline-gray-400 mt-4 text-muted">Write the Review</a>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="col-md-8">
                                                    <div class="mb-10">
                                                        <div class="d-flex justify-content-between align-items-center mb-8">
                                                            <div>

                                                                <h4>Reviews</h4>
                                                            </div>
                                                            <div>
                                                                <select class="form-select">
                                                                    <option selected>Top Review</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex border-bottom pb-6 mb-6">
                                                            <img src="../assets/images/avatar/avatar-10.jpg" alt=""
                                                                class="rounded-circle avatar-lg" />
                                                            <div class="ms-5">
                                                                <h6 class="mb-1">
                                                                    Shankar Subbaraman

                                                                </h6>


                                                                <p class="small"> <span class="text-muted">30 December 2022</span>
                                                                    <span class="text-primary ms-3 fw-bold">Verified Purchase</span></p>

                                                                <div class=" mb-2">
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <span class="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                                                                </div>

                                                                <p>Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open
                                                                    package, there is a possibility of pilferage in between. FreshCart sends the veggies and
                                                                    fruits through sealed plastic covers and Barcode on the weight etc. .</p>
                                                                <div>
                                                                    <div class="border icon-shape icon-lg border-2 ">
                                                                        <img src="../assets/images/products/product-img-1.jpg" alt=""
                                                                            class="img-fluid " />
                                                                    </div>
                                                                    <div class="border icon-shape icon-lg border-2 ms-1 ">
                                                                        <img src="../assets/images/products/product-img-2.jpg" alt=""
                                                                            class="img-fluid " />
                                                                    </div>
                                                                    <div class="border icon-shape icon-lg border-2 ms-1 ">
                                                                        <img src="../assets/images/products/product-img-3.jpg" alt=""
                                                                            class="img-fluid " />
                                                                    </div>

                                                                </div>

                                                                <div class="d-flex justify-content-end mt-4">
                                                                    <a href="#" class="text-muted"><i class="feather-icon icon-thumbs-up me-1"></i>Helpful</a>
                                                                    <a href="#" class="text-muted ms-4"><i class="feather-icon icon-flag me-2"></i>Report
                                                                        abuse</a>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div>
                                                            <a href="#" class="btn btn-outline-gray-400 text-muted">Read More Reviews</a>
                                                        </div>
                                                    </div>
                                                    <div>

                                                        <h3 class="mb-5">Create Review</h3>



                                                        <div class="border-bottom py-4 mb-4">
                                                            <h5>Add a headline</h5>
                                                            <input type="text" class="form-control" placeholder="What’s most important to know" />
                                                        </div>
                                                        <div class="border-bottom py-4 mb-4">
                                                            <h5>Add a photo or video</h5>
                                                            <p>Shoppers find images and videos more helpful than text alone.</p>

                                                            <form action="#" class=" dropzone profile-dropzone">
                                                                <div class="fallback">
                                                                    <input name="file" type="file" multiple />
                                                                </div>
                                                            </form>

                                                        </div>
                                                        <div class=" py-4 mb-4">

                                                            <h5>Add a written review</h5>
                                                            <textarea class="form-control" rows="3"
                                                                placeholder="What did you like or dislike? What did you use this product for?"></textarea>

                                                        </div>

                                                        <div class="d-flex justify-content-end">
                                                            <a href="#" class="btn btn-primary">Submit Review</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="tab-pane fade" id="sellerInfo-tab-pane" role="tabpanel" aria-labelledby="sellerInfo-tab"
                                        tabindex="0">...</div>
                                </div>
                            </div>




                            <ProductShuffle data={this.props.shuffleProductData}/>




                            







                        </div>





                    </div>



                </section>

                <ProductCarousel data={this.props.RelatedItemData} section="Related Item"/>
                

            </>
        )
    }


}))
