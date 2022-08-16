import { useSelector } from "react-redux";
import MusicCard from "../MusicCard";
import Grid from "@mui/material/Grid";

function MusicList() {
  const musics = useSelector((state) => state.musics);

  return (
    <Grid
      container
      spacing={1}
      columns={24}
      sx={{ padding: "2.5% 0", justifyContent: "center" }}
    >
      {musics.map((item) => (
        <Grid key={item.id} item xs={24} sm={12} md={8} lg={4.8}>
          <MusicCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MusicList;
