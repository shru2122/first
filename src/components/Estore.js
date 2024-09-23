import React, {  useMemo } from "react";
import { useDispatch } from "react-redux";
import {loadItems} from "./loadItems"
import ItemListing from "./ItemListing";
import  Paper  from "@mui/material/Paper";
import  Grid  from "@mui/material/Grid";
import SearchParamDemo from "./SearchParams";
import Search from "./Search";

const Estore = () => {
  const dispatch = useDispatch();


  useMemo(() => {
    dispatch(loadItems());
  }, []);
  return (
    <Paper>
        <Grid container>
        <Grid item xs={12} md={12} lg={12}>

        <h2>Shopping Ecom site</h2></Grid>
       <Grid item  xs={12} lg={12}>
        <SearchParamDemo/>
      </Grid>

      <ItemListing/>
      
    </Grid>
      
      </Paper>
  );
};

export default Estore;