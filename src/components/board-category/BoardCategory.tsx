import React from "react";
import styled from "styled-components";

import { List } from "antd";
import { IBoardCategory } from "../../types/BoardTypes";
import BoardItem from "../board-item/BoardItem";
import BoardCategoryHeader from "../board-category-header/BoardCategoryHeader";

interface IProps {
  category: IBoardCategory;
}

export const BoardCategory = ({ category }: IProps) => {
  return (
    <BoardCategoryWrapper
      header={
        <BoardCategoryHeader
          categoryName={category.name}
          amountOfCategoryItems={category.items.length}
        />
      }
      bordered
      dataSource={category.items}
      renderItem={(item: any) => <BoardItem key={item.id} item={item} />}
    />
  );
};

const BoardCategoryWrapper = styled(List).attrs(() => ({
  guttersize: 1,
}))`
  margin: 0 ${(props) => props.guttersize}rem 3rem 0;
  padding: 0;
  width: 100%;

  @media only screen and (min-width: 1000px) {
    width: calc(50% - ${(props) => props.guttersize}rem);
  }

  @media only screen and (min-width: 1200px) {
    width: calc(calc(100% - ${(props) => props.guttersize * 4}rem) / 4);
  }
`;

export default BoardCategory;
