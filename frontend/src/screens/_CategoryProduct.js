import React from "react";
import { connect } from "react-redux";
import withRouter from "./_Helper";
import store from "../store";
import { CategoryRelatedItemAction } from "../Actions/actions";
import { TotalCategory } from "../Actions/actions";
import ProductCard from "../inc/_Productcard";

import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../inc/_Spinner";


const mapStateToProps = (state)=>{

    console.log(state)
    return {CategoryRelatedData:state.CategoryRelatedItemReducer.CategoryRelatedItemData , TotalProduct:state.CategoryTotalReducer.TotalCategory }

}



export default  withRouter(connect(mapStateToProps)(class CategoryProduct extends React.Component{

    
    constructor(props){
        super(props)
        store.dispatch(CategoryRelatedItemAction(this.props.params.catname))
        store.dispatch(TotalCategory(this.props.params.catname))
        this.state = {

          items: Array.from({ length: 20 }),
          hasMore: true,
         
        }
    }

 



  

    fetchMoreData = () => {
      store.dispatch(CategoryRelatedItemAction(this.props.params.catname))


      
        if (this.state.items.length >= this.props.TotalProduct.totalproduct ) {
          this.setState({ hasMore: false });
          return;
        }
  

      
      
    

      setTimeout(() => {
        this.setState({
          items: this.state.items.concat(Array.from({ length: 20 }))
        });
      }, 500);
    };
    
    
    
    
    render(){

        console.log(this.state.items, "ASDFAsdfasdfasdf")

        return(
            <>
            
            <div class=" mt-8 mb-lg-14 mb-8">
  
    <div class="container">
   
      <div class="row gx-10">
      
        <aside class="col-lg-3 col-md-4 mb-6 mb-md-0">
          <div class="offcanvas offcanvas-start offcanvas-collapse w-md-50 " tabindex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">

            <div class="offcanvas-header d-lg-none">
              <h5 class="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ps-lg-2 pt-lg-0">
            <div class="mb-8">
          
            <h5 class="mb-3">Categories</h5>
         
            <ul class="nav nav-category" id="categoryCollapseMenu">
              <li class="nav-item border-bottom w-100 " ><a href="#"
                  class="nav-link collapsed" data-bs-toggle="collapse"
                  data-bs-target="#categoryFlushOne" aria-expanded="false" aria-controls="categoryFlushOne">Dairy, Bread & Eggs <i class="feather-icon icon-chevron-right"></i></a>
          
                <div id="categoryFlushOne" class="accordion-collapse collapse"
                  data-bs-parent="#categoryCollapseMenu">
                  <div>
       

                    <ul class="nav flex-column ms-3">
                   
                      <li class="nav-item"><a href="#!" class="nav-link">Milk</a></li>
                     
                    </ul>



                  </div>
                </div>

              </li>
              

            </ul>
          </div>

          <div class="mb-8">

            <h5 class="mb-3">Stores</h5>
            <div class="my-4">
           
              <input type="search" class="form-control" placeholder="Search by store" />
            </div>
            
            <div class="form-check mb-2">
           
              <input class="form-check-input" type="checkbox" value="" id="eGrocery" checked />
              <label class="form-check-label" for="eGrocery">
                E-Grocery
              </label>
            </div>
           

          </div>
          <div class="mb-8">
       
            <h5 class="mb-3">Price</h5>
            <div>
   
              <div id="priceRange" class="mb-3"></div>
              <small class="text-muted">Price:</small> <span id="priceRange-value" class="small"></span>

            </div>



          </div>
        
          <div class="mb-8">

            <h5 class="mb-3">Rating</h5>
            <div>
            
              <div class="form-check mb-2">
        
                <input class="form-check-input" type="checkbox" value="" id="ratingFive" />
                <label class="form-check-label" for="ratingFive">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star-fill text-warning "></i>
                </label>
              </div>
              
              <div class="form-check mb-2">
               
                <input class="form-check-input" type="checkbox" value="" id="ratingFour" checked />
                <label class="form-check-label" for="ratingFour">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star text-warning"></i>
                </label>
              </div>
             
              <div class="form-check mb-2">
           
                <input class="form-check-input" type="checkbox" value="" id="ratingThree" />
                <label class="form-check-label" for="ratingThree">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star-fill text-warning "></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                </label>
              </div>
             
              <div class="form-check mb-2">
             
                <input class="form-check-input" type="checkbox" value="" id="ratingTwo" />
                <label class="form-check-label" for="ratingTwo">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                </label>
              </div>
        
              <div class="form-check mb-2">
            
                <input class="form-check-input" type="checkbox" value="" id="ratingOne" />
                <label class="form-check-label" for="ratingOne">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                </label>
              </div>
            </div>


          </div>
          <div class="mb-8 position-relative">
      
            <div class="position-absolute p-5 py-8">
              <h3 class="mb-0">Fresh Fruits </h3>
              <p>Get Upto 25% Off</p>
              <a href="#" class="btn btn-dark">Shop Now<i class="feather-icon icon-arrow-right ms-1"></i></a>
            </div>
         
          
          <img src="../assets/images/banner/assortment-citrus-fruits.png" alt=""
              class="img-fluid rounded " />
         
          </div>
        </div>
        </div>
        </aside>
    
        <section class="col-lg-9 col-md-12">

          <div class="card mb-4 bg-light border-0">
      
            <div class=" card-body p-9">
              <h2 class="mb-0 fs-1">Snacks & Munchies</h2>
            </div>
          </div>
    
          <div class="d-lg-flex justify-content-between align-items-center">
            <div class="mb-3 mb-lg-0">
              <p class="mb-0"> <span class="text-dark">24 </span> Products found </p>
            </div>

        
            <div class="d-md-flex justify-content-between align-items-center">
             
              <div class="d-flex mt-2 mt-lg-0">
              
                <div>
 
                  <select class="form-select">
                    <option selected>Sort by: Featured</option>
                    <option value="Low to High">Price: Low to High</option>
                    <option value="High to Low"> Price: High to Low</option>
                   

                  </select></div>

              </div>

            </div>
          </div>
        
         


       <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          style={{overflow:"none"}}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
   
        > 
         <div class="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
      <ProductCard data={this.props.CategoryRelatedData}/>
      </div>
      </InfiniteScroll>      
            

        

        </section>
      </div>
    </div>
  </div>
            
            </>
        )

    }


}))