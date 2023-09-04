import React from 'react'
import Carousel from 'react-grid-carousel'



export default class ProductCarousel extends React.Component{


    render(){
        return (
            <>
            <section class="my-lg-14 my-14">
                    <div class="container">

                        <div class="row">
                            <div class="col-12">

                                <h3>{this.props.section}</h3>
                            </div>
                        </div>

                        <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2" style={{width:"100%"}}>
                        <Carousel cols={5} rows={1} gap={10} hideArrow={ this.props.data != undefined ? this.props.data.length > 6 ? false : true : true} loop>
                            {this.props.data === undefined ? null : this.props.data.map((data)=>{

                                return (
                                    <Carousel.Item>
                                    <div class="col">
                                    <div class="card card-product">
                                        <div class="card-body">
    
                                            <div class="text-center position-relative"> <a href="#!"><img
                                                src="../assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template"
                                                class="mb-3 img-fluid" /></a>
    
                                            </div>
    
                                            <div class="text-small mb-1"><a href="#!" class="text-decoration-none text-muted"><small>Bakery &
                                                Biscuits</small></a></div>
                                            <h2 class="fs-6"><a href="#!" class="text-inherit text-decoration-none">{data.title} </a></h2>
                                            <div class="text-warning">
    
                                                <small> <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-half"></i></small> <span class="text-muted small">4.5 (25)</span>
                                            </div>
    
                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                                <div><span class="text-dark">$24</span>
                                                </div>
    
                                                <div><a href="#!" class="btn btn-primary btn-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-plus">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg> Add</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </Carousel.Item>
                                )


                            })}

                               
                            </Carousel>


                            
                        </div>
                    </div>
                </section>
            
            </>
        )
    }


}