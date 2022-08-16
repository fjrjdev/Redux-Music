import React from "react";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch } from "react-redux";
import {
  addMusicThunk,
  removeMusicThunk,
} from "../../store/modules/queue/thunks";

const MusicCard = ({ item, removeItem = false }, queueList) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addMusicThunk(item));
  };
  const handleRemove = (id) => {
    dispatch(removeMusicThunk(id, queueList));
  };

  return (
    <ImageListItem>
      <img src={item.album.cover_big} alt={item.title} loading="auto" />
      <ImageListItemBar
        title={item.title}
        subtitle={item.artist.name}
        actionIcon={
          removeItem ? (
            <IconButton
              onClick={() => handleRemove(item.id)}
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.title}`}
            >
              <PlaylistRemoveIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => handleClick(item)}
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.title}`}
            >
              <PlaylistAddIcon />
            </IconButton>
          )
        }
      />
    </ImageListItem>
  );
};

export default MusicCard;
