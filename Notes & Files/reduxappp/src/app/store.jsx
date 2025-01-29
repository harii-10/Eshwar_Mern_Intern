import { configureStore } from "@reduxjs/toolkit";
import  userReduce from '../slices/userslice';

const Store = configureStore({
    reducer:{
        inc:userReduce,
    },

});
export default Store;