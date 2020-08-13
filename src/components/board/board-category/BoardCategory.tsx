import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import { List } from "antd";
import { BoardCategory as BoardCategoryType } from "../../../types/BoardTypes";
import BoardItem from "../board-item/BoardItem";
import BoardCategoryHeader from "../board-category-header/BoardCategoryHeader";

interface IProps {
  category: BoardCategoryType;
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
      renderItem={(item: any, index: number) => (
        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <BoardItem key={item.id} item={item} />
            </div>
          )}
        </Draggable>
      )}
    />
  );
};

const BoardCategoryWrapper = styled(List)`
  padding: 0;
  min-width: 100%;
  min-height: 100%;
`;

export default BoardCategory;
