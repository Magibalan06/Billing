import { useActionData } from "react-router-dom";
import Actions from "./actions";

const initialValue = {
    productList : {},
    userEmail: '',
    productId: '',
    quantity: '',
    tax_per_item: '',
    item_price: '',
    price_per_item: '',
    table_values: [],
    denomination: {},
    customerAmount: [],
    customerFinalAmount: '',
    remainingAmount: '',
    customerDenomination: [],
    newDataSource: [],

}

function reducer(state = initialValue, action) {
    switch (action.type) {
        case Actions.PRODUCT_LIST_REQUEST : {
            return {
                ...state
            }
        }
        case Actions.PRODUCT_LIST_SUCCESS : {
            console.log(action.payload)
            return {
                ...state,
                productList: action.payload
            }
        }
        case Actions.PRODUCT_LIST_FAILURE : {
            return {
                ...state
            }
        }
        case Actions.USER_EMAIL : {
            return {
                ...state,
                userEmail: action.payload
            }
        }
        case Actions.PRODUCT_ID : {
            return {
                ...state,
                productId: action.payload
            }
        }
        case Actions.QUANTITY : {
            return {
                ...state,
                quantity: action.payload
            }
        }
        case Actions. TAX_PER_ITEM : {
            return {
                ...state,
                tax_per_item: action.payload
            }
        }
        case Actions. ITEM_PRICE : {
            return {
                ...state,
                item_price: action.payload
            }
        }
        case Actions.PRICE_PER_ITEM : {
            return {
                ...state,
                price_per_item : action.payload
            }
        }
        case Actions.TABLE_VALUES : {
            console.log(action.payload)
            return {
                ...state,
                table_values : action.payload
            }
        }
        case Actions.DENOMINATION  :{
            return {
                ...state,
                denomination : action.payload
            }
        }
        case Actions.CUSTOMER_AMOUNT : {
            return {
                ...state,
                customerAmount: action.payload
            }
        }
        case Actions.CUSTOMER_FINAL_AMOUNT : {
            return {
                ...state,
                customerFinalAmount: action.payload
            }
        }
        case Actions.REMAINING_AMOUNT : {
            return{
                ...state,
                remainingAmount: action.payload
            }
        }
        case Actions.CUSTOMER_DENOMINATION : {
            return {
                ...state,
                customerDenomination : action.payload
            }
        }
        case Actions.NEW_TABLE_VALUES : {
            console.log('newdataSource', action.payload)
            return {
                ...state,
                newDataSource: action.payload 
            }
        }
        default :
        return state
    }
}

export default reducer