import {
    ALL_NESTED_CATEGORY_FAIL,
    ALL_NESTED_CATEGORY_REQUEST,
    ALL_NESTED_CATEGORY_SUCCESS,

    FLASH_SALE_REQUEST,
    FLASH_SALE_SUCCESS,
    FLASH_SALE_FAIL,

    TOP_CATEGORY_REQUEST,
    TOP_CATEGORY_SUCCESS,
    TOP_CATEGORY_FAIL,

    DASH_PRODUCT_REQUEST,
    DASH_PRODUCT_SUCCESS,
    DASH_PRODUCT_FAIL,

    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,

    SELLER_PRO_SHUFFLE_REQUEST,
    SELLER_PRO_SHUFFLE_SUCCESS,
    SELLER_PRO_SHUFFLE_FAIL,

    RELATED_ITEM_REQUEST,
    RELATED_ITEM_SUCCESS,
    RELATED_ITEM_FAIL,

    CATEGORY_RELATED_ITEM_REQUEST,
    CATEGORY_RELATED_ITEM_SUCCESS,
    CATEGORY_RELATED_ITEM_FAIL

} from "../Constants/constants"


export const NestedcategoryReducer = (state = [], action) => {

    switch (action.type) {
        case ALL_NESTED_CATEGORY_REQUEST:
            return { loading: true }
        case ALL_NESTED_CATEGORY_SUCCESS:
            return { loading: false, NestedCategoryData: action.payload }
        case ALL_NESTED_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const FlashSaleReducer = (state = {}, action) => {

    switch (action.type) {
        case FLASH_SALE_REQUEST:
            return { loading: true }
        case FLASH_SALE_SUCCESS:
            return { loading: false, FlashSaleData: action.payload }
        case FLASH_SALE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}


export const TopCategoryReducer = (state = {}, action) => {

    switch (action.type) {
        case TOP_CATEGORY_REQUEST:
            return { loading: true }
        case TOP_CATEGORY_SUCCESS:
            return { loading: false, TopCategoryData: action.payload }
        case TOP_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }


}

export const DashProductReducer = (state = {}, action) => {

    switch (action.type) {
        case DASH_PRODUCT_REQUEST:
            return { loading: true }
        case DASH_PRODUCT_SUCCESS:
            return { loading: false, DashProductData: action.payload }
        case DASH_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }


}


export const SingleProductReducer = (state = {}, action) => {

    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return { loading: true }
        case SINGLE_PRODUCT_SUCCESS:
            return { loading: false, SingleProductData: action.payload }
        case SINGLE_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }


}

export const SellerProductShuffleReducer = (state = {}, action) => {

    switch (action.type) {
        case SELLER_PRO_SHUFFLE_REQUEST:
            return { loading: true }
        case SELLER_PRO_SHUFFLE_SUCCESS:
            return { loading: false, SellerProductShuffleData: action.payload }
        case SELLER_PRO_SHUFFLE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }


}


export const RelatedItemReducer = (state = {}, action) => {

    switch (action.type) {
        case RELATED_ITEM_REQUEST:
            return { loading: true }
        case RELATED_ITEM_SUCCESS:
            return { loading: false, RelatedItemData: action.payload }
        case RELATED_ITEM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }


}



export const CategoryRelatedItemReducer = (state = {}, action) => {

    switch (action.type) {
        case CATEGORY_RELATED_ITEM_REQUEST:
            return { loading: true }
        case CATEGORY_RELATED_ITEM_SUCCESS:
            return { loading: false, CategoryRelatedItemData: action.payload }
        case CATEGORY_RELATED_ITEM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }


}