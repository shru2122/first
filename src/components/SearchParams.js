import React, {  useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { useSearchParams } from "react-router-dom";
import Search from "./Search";
import Item from "./Item";
import ItemListing from "./ItemListing";


const SearchParamDemo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  const [data,setData]=useState([])


  useMemo(() => {
    let result = {...data?.item};

    if (searchParams?.has("s")) {
      if (searchParams.has("s")) {
        const search = searchParams.get("s");
        var pattern = new RegExp(search, "gi");
        result = result?.filter(
          (item) => pattern?.test(item?.title) || pattern?.test(item?.price)
        );
      }
    }

    setData(result);
  }, [searchParams]);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card
              sx={{ p: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Grid container spacing={2}>
                
                <Grid item xs={12} md={12}>
                  <Search />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid container>
          <Grid item xs={12} lg={12}>
            <Paper sx={{ p: 2 }}>
              <Grid container spacing={2} >
                {Array.isArray(data) &&
                  data?.map((item) => (
                    <Grid item xs={12} md={12} lg={3} key={item.id}>
                      <Item {...item} />
                    </Grid>
                  ))}
              </Grid>
            </Paper>
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SearchParamDemo;
