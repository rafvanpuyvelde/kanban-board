import { createSlice } from "@reduxjs/toolkit";

import { BoardCategoryList } from "../../../types/BoardTypes";
import initialBoardState from "./initialBoardState";

import {
  deleteBoardItemReducer,
  createBoardItemReducer,
  moveItemInCategoryReducer,
  moveItemToOtherCategoryReducer,
  editBoardItemReducer,
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
    editBoardItem: editBoardItemReducer,
    moveItemInCategory: moveItemInCategoryReducer,
    moveItemToOtherCategory: moveItemToOtherCategoryReducer,
  },
});

export const {
  deleteBoardItem,
  createBoardItem,
  editBoardItem,
  moveItemInCategory,
  moveItemToOtherCategory,
} = boardSlice.actions;

export default boardSlice;
