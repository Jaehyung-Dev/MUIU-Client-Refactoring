import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const post = createAsyncThunk(
    'mind-column/post',
    async(formData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:9090/mind-column', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            return response.data;
        } catch(e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const getList = createAsyncThunk(
    'mind-column/getList',
    async(_, thunkApi) => {
        try {
            const response = await axios.get('http://localhost:9090/mind-column', {
                params: {}
            });
            console.log('API Response:', response.data);
            return response.data;
        } catch (e) {
            console.error('API Error:', e); 
            return thunkApi.rejectWithValue(e);
        }
    }
);