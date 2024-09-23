import React from "react";
import TextField from "@mui/material/TextField";
import { useSearchParams } from "react-router-dom";


const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({target}) => {
    if (target?.value?.length > 2) {
      searchParams?.set("s", target?.value);

    } else {
      searchParams?.delete("s")
    }
    setSearchParams(searchParams)
  };


  



  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        label="search here.."
        onChange={handleChange}
             />
    </>
  );
};

export default Search;



