import { ADD_MUSIC, REMOVE_MUSIC } from "./actionsTypes";

const queueReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  const { music, list } = action;
  switch (action.type) {
    case ADD_MUSIC: {
      const list = [...state, music];
      return list;
    }
    case REMOVE_MUSIC: {
      return list;
    }
    default:
      return state;
  }
};

export default queueReducer;
