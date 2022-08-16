import { addMusic, removeMusic } from "./actions";

export const addMusicThunk = (music) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  function checkMusic(music) {
    const find = list.find((elem) => elem.id === music.id);
    return find;
  }

  if (checkMusic(music) === undefined) {
    list.push(music);
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addMusic(music));
  } else {
    console.log("error");
  }
};

export const removeMusicThunk = (id) => (dispatch, getState) => {
  const { queueList } = getState();
  const list = queueList.filter((elem) => elem.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeMusic(list));
};
