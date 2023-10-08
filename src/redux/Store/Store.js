import { configureStore } from '@reduxjs/toolkit'
import  shopSlice  from '../Reducers/ShopReducer/ShopReducer'

export const store = configureStore({
    reducer:{
        shopRedux: shopSlice
    }
})

