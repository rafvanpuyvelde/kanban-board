import React from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  DraggableLocation,
} from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import BoardCategory from "../board-category/BoardCategory";
import { BoardCategory as BoardCategoryType } from "../../../types/BoardTypes";
import DroppableGrid from "../../droppable/droppable-grid/DroppableGrid";
import {
  moveItemInCategory,
  moveItemToOtherCategory,
} from "../../../store/slices/board/boardSlice";

interface IProps {
  categories: BoardCategoryType[];
}

interface IDraggable {
  source: DraggableLocation;
  destination: DraggableLocation;
}

export const BoardCategoryList = ({ categories }: IProps) => {
  const dispatch = useDispatch();

  const onDragEnd = (result: any) => {
    const { source, destination }: IDraggable = result;

    // Check if new position is valid
    if (!dragPositionIsValid(destination, source)) return;

    // Find column from which the item was dragged from
    const oldColumn: BoardCategoryType = categories[+source.droppableId];

    // Find column in which the item was dropped
    const newColumn: BoardCategoryType = categories[+destination.droppableId];

    // Move item
    if (oldColumn === newColumn)
      moveItemInOriginalList(oldColumn, source, destination);
    else moveItemToNewList(oldColumn, newColumn, source, destination);
  };

  const dragPositionIsValid = (
    destination: DraggableLocation,
    source: DraggableLocation
  ): boolean => {
    const isItemDroppedOutsideList = !destination;
    const isPositionTheSame =
      destination.droppableId === source.droppableId &&
      destination.index === source.index;

    return !(isItemDroppedOutsideList || isPositionTheSame);
  };

  const moveItemInOriginalList = (
    oldColumn: BoardCategoryType,
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    dispatch(
      moveItemInCategory({
        category: oldColumn.name,
        oldItemIndex: source.index,
        newItemIndex: destination.index,
      })
    );
  };

  const moveItemToNewList = (
    oldColumn: BoardCategoryType,
    newColumn: BoardCategoryType,
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    dispatch(
      moveItemToOtherCategory({
        oldCategory: oldColumn.name,
        newCategory: newColumn.name,
        oldItemIndex: source.index,
        newItemIndex: destination.index,
      })
    );
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
