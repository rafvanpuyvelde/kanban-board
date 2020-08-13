import { IBoardState } from "../../slices/board/boardSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { BoardCategory } from "../../../types/BoardTypes";

//
// Helper methods
//

const getBoardItemDetailsById = (
  state: IBoardState,
  id: number
): {
  categoryIndex: number;
  itemIndex: number;
} | null => {
  for (
    let categoryIndex = 0;
    categoryIndex < state.categories.length;
    categoryIndex++
  ) {
    const category = state.categories[categoryIndex];
    const itemIndex = category.items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) return { categoryIndex, itemIndex };
  }

  return null;
};

const getNewBoardItemId = (state: IBoardState): number => {
  let id: number;

  const lastCategory = state.categories[state.categories.length - 1];

  if (lastCategory.items.length > 0)
    id = lastCategory.items[lastCategory.items.length - 1].id + 1;
  else id = 1;

  return id;
};

const getCategoryIndexByCategoryName = (
  state: IBoardState,
  categoryName: string
): number => {
  return state.categories.findIndex(
    (category) => category.name === categoryName
  );
};

export const deleteBoardItemReducer = (
  state: IBoardState,
  { payload }: PayloadAction<number>
) => {
  const itemDetails = getBoardItemDetailsById(state, payload);
  if (itemDetails)
    state.categories[itemDetails?.categoryIndex].items.splice(
      itemDetails.itemIndex,
      1
    );
};

//
// Reducers
//

export const createBoardItemReducer = (
  state: IBoardState,
  {
    payload,
  }: PayloadAction<{
    category: string;
    description: string;
    tags: string[];
  }>
) => {
  const category = state.categories.find(
    (category: BoardCategory) => category.name === payload.category
  );

  if (category)
    category.items.push({
      id: getNewBoardItemId(state),
      description: payload.description,
      author: "Jane Doe",
      tags: payload.tags,
    });
};

export const editBoardItemReducer = (
  state: IBoardState,
  {
    payload,
  }: PayloadAction<{
    itemId: number;
    description: string;
    tags: string[];
  }>
) => {
  const itemDetails = getBoardItemDetailsById(state, payload.itemId);

  if (itemDetails) {
    let item =
      state.categories[itemDetails.categoryIndex].items[itemDetails?.itemIndex];
    item.description = payload.description;
    item.tags = payload.tags;
  }
};

export const moveItemInCategoryReducer = (
  state: IBoardState,
  {
    payload,
  }: PayloadAction<{
    category: string;
    oldItemIndex: number;
    newItemIndex: number;
  }>
) => {
  // Get the category items
  const items =
    state.categories[getCategoryIndexByCategoryName(state, payload.category)]
      .items;

  // Remove the item from its original position
  const [removedItem] = items.splice(payload.oldItemIndex, 1);

  // Insert into the new position
  items.splice(payload.newItemIndex, 0, removedItem);
};

export const moveItemToOtherCategoryReducer = (
  state: IBoardState,
  {
    payload,
  }: PayloadAction<{
    oldCategory: string;
    newCategory: string;
    oldItemIndex: number;
    newItemIndex: number;
  }>
) => {
  // Get the category items
  const oldCategoryItems =
    state.categories[getCategoryIndexByCategoryName(state, payload.oldCategory)]
      .items;
  const newCategoryItems =
    state.categories[getCategoryIndexByCategoryName(state, payload.newCategory)]
      .items;

  // Remove the item from its original category
  const [removedItem] = oldCategoryItems.splice(payload.oldItemIndex, 1);

  // Insert into the new category at the provided position
  newCategoryItems.splice(payload.newItemIndex, 0, removedItem);
};
