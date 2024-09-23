import React from "react";

import Card from "@mui/material/Card";
import { Rating } from "@mui/material";

const Item = ([
  id,
  title,

  rating,
  price,
  thumbnail,
  images
]) => {
  return (
    <Card sx={{ p: 2, m: 1, width: 200 }}>
      <img
        src={thumbnail}
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <h4>{title}</h4>
      <p>Price:{price} </p>
      <Rating name="simple-controlled" value={rating} />
    </Card>
  );
};

export default Item;
