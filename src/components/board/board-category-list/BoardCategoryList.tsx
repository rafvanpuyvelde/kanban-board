import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import BoardCategory from "../board-category/BoardCategory";
import { IBoardCategory } from "../../../types/BoardTypes";
import DroppableGrid from "../../droppable/droppable-grid/DroppableGrid";

interface IProps {
  categories: IBoardCategory[];
}

export const BoardCategoryList = ({ categories }: IProps) => {
  const onDragEnd = () => {
    console.log("onDragEnd");
  };

  return (
    <BoardCategoryListWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {categories &&
          categories.map((category, index) => (
            <Droppable key={index} droppableId={index.toString()}>
              {(provided) => (
                <DroppableGrid
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <BoardCategory key={category.name} category={category} />
                  {provided.placeholder}
                </DroppableGrid>
              )}
            </Droppable>
          ))}
        {categories.length <= 0 && <p>No categories found ...</p>}
      </DragDropContext>
    </BoardCategoryListWrapper>
  );
};

const BoardCategoryListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

export default BoardCategoryList;
