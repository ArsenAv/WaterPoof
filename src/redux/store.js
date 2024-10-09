import { configureStore } from '@reduxjs/toolkit'
import WaterSlice from './WaterSlice'

const store = configureStore({
    reducer: {
        water: WaterSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch