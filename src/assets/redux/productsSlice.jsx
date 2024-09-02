import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts=createAsyncThunk('products/fetchProducts',async () => {
    const response=await fetch('https://fakestoreapi.com/products');
    return response.json();
})

export const fetchProductById=createAsyncThunk('products/fetchProductById',async (id) =>{
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
})

const productsSlice=createSlice({
    name: 'products',
    initialState:{
        products:[],
        product:null,
        status:'idle',
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='suceeded'
            console.log('suceeded in withdrawing data')
            state.products=(action.payload);
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.status='failed'
            state.error=action.error.message;
        })
        builder.addCase(fetchProductById.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchProductById.fulfilled,(state,action)=>{
            state.status='succeded'
            state.product=action.payload;
        })
        builder.addCase(fetchProductById.rejected,(state,action)=>{
            state.status='failed'
            state.error=action.error.message;
        })
    }
})

export default productsSlice.reducer;