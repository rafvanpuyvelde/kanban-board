import React from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  DraggableLocation,
  DraggableId,
} from "react-beautiful-dnd";

import BoardCategory from "../board-category/BoardCategory";
import { IBoardCategory } from "../../../types/BoardTypes";
import DroppableGrid from "../../droppable/droppable-grid/DroppableGrid";

interface IProps {
  categories: IBoardCategory[];
}

interface IDraggable {
  source: DraggableLocation;
  destination: DraggableLocation;
  draggableId: DraggableId;
}

export const BoardCategoryList = ({ categories }: IProps) => {
  const onDragEnd = (result: any) => {
    const { source, destination, draggableId }: IDraggable = result;

    // Check if new position is valid
    if (!dragPositionIsValid(destination, source)) return;

    // Find column from which the item was dragged from
    const oldColumn: IBoardCategory = categories[+source.droppableId];

    // Find column in which the item was dropped
    const newColumn: IBoardCategory = categories[+destination.droppableId];

    // Move item
    if (oldColumn === newColumn)
      moveItemInOriginalList(oldColumn, source, destination, draggableId);
    // else
    //   moveItemToNewList(oldColumn, newColumn, source, destination, draggableId);
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
    oldColumn: IBoardCategory,
    source: DraggableLocation,
    destination: DraggableLocation,
    draggableId: DraggableId
  ) => {
    // Get all item ids in currently active list
    const newItemsIds = oldColumn.items.map((item) => item.id);

    // Remove the id of dragged item from its original position
    newItemsIds.splice(source.index, 1);

    // Insert the id of dragged item to the new position
    newItemsIds.splice(destination.index, 0, +draggableId);

    // Update the board state with updated column data
    console.log(newItemsIds);
  };

  // const moveItemToNewList = (
  //   oldColumn: any,
  //   newColumn: any,
  //   source: any,
  //   destination: any,
  //   draggableId: any
  // ) => {
  //   // Moving items from one list to another
  //   // Get all item ids in source list
  //   const newStartItemsIds = Array.from(oldColumn.itemsIds);

  //   // Remove the id of dragged item from its original position
  //   newStartItemsIds.splice(source.index, 1);

  //   // Create new, updated, object with data for source column
  //   const newColumnStart = {
  //     ...oldColumn,
  //     itemsIds: newStartItemsIds,
  //   };

  //   // Get all item ids in destination list
  //   const newFinishItemsIds = Array.from(newColumn.itemsIds);

  //   // Insert the id of dragged item to the new position in destination list
  //   newFinishItemsIds.splice(destination.index, 0, draggableId);

  //   // Create new, updated, object with data for destination column
  //   const newColumnFinish = {
  //     ...newColumn,
  //     itemsIds: newFinishItemsIds,
  //   };

  //   // Create new board state with updated data for both, source and destination columns
  //   const newState = {
  //     ...this.state,
  //     columns: {
  //       ...this.state.columns,
  //       [newColumnStart.id]: newColumnStart,
  //       [newColumnFinish.id]: newColumnFinish,
  //     },
  //   };

  //   // Update the board state with new data
  //   this.setState(newState);
  // };

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
