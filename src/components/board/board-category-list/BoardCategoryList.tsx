import React from "react";
import styled from "styled-components";

import BoardCategory from "../board-category/BoardCategory";
import { IBoardCategory } from "../../../types/BoardTypes";

interface IProps {
  categories: IBoardCategory[];
}

export const BoardCategoryList = ({ categories }: IProps) => {
  return (
    <BoardCategoryListWrapper>
      {categories &&
        categories.map((category) => (
          <BoardCategory key={category.name} category={category} />
        ))}
      {categories.length <= 0 && <p>No categories found ...</p>}
    </BoardCategoryListWrapper>
  );
};

const BoardCategoryListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: space-between;
`;

export default BoardCategoryList;
