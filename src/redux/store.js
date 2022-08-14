import { configureStore } from '@reduxjs/toolkit'
import CatSlice from './CatSlice'

const store = configureStore({
    reducer: {
        cat: CatSlice
    }
})

export default store;