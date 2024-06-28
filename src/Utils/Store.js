import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import QuerySlice from "./QuerySlice";
import searchSlice from "./SearchSlice";

const store=configureStore({

    reducer:{


        app:appSlice,
        Query:QuerySlice ,
        search:searchSlice

    }
})

export default store