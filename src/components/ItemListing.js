import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "./ItemSlice";
const ItemListing = () => {
  const items = useSelector(selectItems);
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(items) &&
        items?.map(({ id, title, brand, price,thumbnail,image }) => (
          <div
            key={id}
            style={{
              width: 250,
              border: "1px solid #999",
              margin: 5,
              padding: 5,
            }}
          >
            <img src={image} style={{ width: "100%", height: 200 }} />
            <h3>{title} </h3>
            <p>Price: {price} </p>
          </div>
        ))}
    </section>
  );
};

export default ItemListing;