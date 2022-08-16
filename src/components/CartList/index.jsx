import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import MusicCard from "../MusicCard";

const CartList = () => {
  const queueList = useSelector(({ queueList }) => queueList);

  return (
    <Grid
      container
      spacing={1}
      columns={24}
      sx={{ padding: "2.5% 0", justifyContent: "center" }}
    >
      <Grid item xs={24} sm={24} md={24} lg={24}>
        <h1>Playlist</h1>
      </Grid>
      {queueList.map((item) => (
        <Grid key={item.id} item xs={24} sm={12} md={8} lg={4.8}>
          <MusicCard item={item} removeItem queueList={queueList} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CartList;
