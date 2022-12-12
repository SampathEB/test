import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface Product{
    title: string,
    price: number,
    id: string
}

const initialState: Product[] = [
    {title : "prasanna sampath", price :60, id:"abc"},
    {title : "damith asanka", price :50, id:"def"},
    {title : "mahesh madurang", price :660, id:"ghi"},
]

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>)=>{
            return [action.payload, ...state]
        }
    }
})

export const {addProduct} = productSlice.actions
export const getProductSelectore = (state:  RootState) => state.products;
export default productSlice.reducer;