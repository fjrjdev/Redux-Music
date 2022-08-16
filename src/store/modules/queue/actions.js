import { ADD_MUSIC, REMOVE_MUSIC } from "./actionsTypes";

export const addMusic = (music) => ({ type: ADD_MUSIC, music });

export const removeMusic = (list) => ({ type: REMOVE_MUSIC, list });
