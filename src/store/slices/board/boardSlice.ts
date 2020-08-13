import { createSlice } from "@reduxjs/toolkit";

import { BoardCategoryList } from "../../../types/BoardTypes";
import initialBoardState from "./initialBoardState";

import {
  deleteBoardItemReducer,
  createBoardItemReducer,
  moveItemInCategoryReducer,
  moveItemToOtherCategoryReducer,
} from "../../reducers/board/boardReducer";

export interface IBoardState extends BoardCategoryList {
  users: string[];
}

const boardSlice = createSlice({
  name: "board",
  initialState: initialBoardState,
  reducers: {
    deleteBoardItem: deleteBoardItemReducer,
    createBoardItem: createBoardItemReducer,
    moveItemInCategory: moveItemInCategoryReducer,
    moveItemToOtherCategory: moveItemToOtherCategoryReducer,
  },
});

export const {
  deleteBoardItem,
  createBoardItem,
  moveItemInCategory,
  moveItemToOtherCategory,
} = boardSlice.actions;

export default boardSlice;
