import { Container } from "@mui/material";
import React from "react";
import MusicList from "../../components/MusicList";
import ResposiveAppBar from "../../components/ResposiveAppBar";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <ResposiveAppBar />
      <MusicList />
    </Container>
  );
};

export default Home;
