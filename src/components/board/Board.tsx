import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import BoardCategoryList from "../board-category-list/BoardCategoryList";

export const Board = () => {
  const board = useSelector((state: RootState) => state.board);

  return (
    <div>
      <h1>{board.name}</h1>
      <BoardCategoryList categories={board.categories} />
    </div>
  );
};

export default Board;
