import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBoardCategoryList } from "../../types/BoardTypes";

export interface IBoardState extends IBoardCategoryList {
  users: string[];
}

const initialBoardState: IBoardState = {
  name: "Kanban board",
  users: ["Jane Doe", "John Doe"],
  categories: [
    {
      name: "TO DO",
      items: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS", "TEST-1"],
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS", "TEST-2"],
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS", "TEST-3"],
        },
      ],
    },
    {
      name: "IN PROGRESS",
      items: [],
    },
    {
      name: "CODE REVIEW",
      items: [
        {
          id: 8,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS", "TEST-4"],
        },
        {
          id: 9,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS", "TEST-5"],
        },
        {
          id: 10,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS", "TEST-6"],
        },
      ],
    },
    {
      name: "DONE",
      items: [
        {
          id: 11,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS", "TEST-7"],
        },
        {
          id: 12,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS", "TEST-8"],
        },
        {
          id: 13,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS", "TEST-9"],
        },
        {
          id: 14,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS", "TEST-10"],
        },
        {
          id: 15,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS", "TEST-11"],
        },
      ],
    },
  ],
};

const getBoardItemDetailsById = (
  state: IBoardState,
  id: number
): {
  categoryIndex: number;
  itemIndex: number;
} | null => {
  let boardItemDetails = null;

  for (
    let categoryIndex = 0;
    categoryIndex < state.categories.length;
    categoryIndex++
  ) {
    const category = state.categories[categoryIndex];
    const itemIndex = category.items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) boardItemDetails = { categoryIndex, itemIndex };
  }

  console.log(boardItemDetails);

  return boardItemDetails;
};

const getNewBoardItemId = (state: IBoardState) => {
  const lastCategory = state.categories[state.categories.length - 1];
  return lastCategory.items[lastCategory.items.length - 1].id + 1;
};

const boardSlice = createSlice({
  name: "board",
  initialState: initialBoardState,
  reducers: {
    deleteBoardItem: (state, { payload }: PayloadAction<number>) => {
      const itemDetails = getBoardItemDetailsById(state, payload);
      if (itemDetails)
        state.categories[itemDetails?.categoryIndex].items.splice(
          itemDetails.itemIndex,
          1
        );
    },
    createBoardItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        category: string;
        description: string;
        tags: string[];
      }>
    ) => {
      const category = state.categories.find(
        (category) => category.name === payload.category
      );
      if (category)
        category.items.push({
          id: getNewBoardItemId(state),
          description: payload.description,
          author: "Jane Doe",
          tags: payload.tags,
        });
    },
    moveItemInCategory: (
      state,
      {
        payload,
      }: PayloadAction<{
        category: string;
        oldItemIndex: number;
        newItemIndex: number;
      }>
    ) => {
      // Get the category index by the category name
      const categoryIndex = state.categories.findIndex(
        (category) => category.name === payload.category
      );

      // Get the category items
      const items = state.categories[categoryIndex].items;
      // Remove the item from its original position
      const [removedItem] = items.splice(payload.oldItemIndex, 1);
      // Insert into the new position
      items.splice(payload.newItemIndex, 0, removedItem);
    },
    moveItemToOtherCategory: (
      state,
      {
        payload,
      }: PayloadAction<{
        oldCategory: string;
        newCategory: string;
        oldItemIndex: number;
        newItemIndex: number;
      }>
    ) => {
      // Get the old category index by the category name
      const oldCategoryIndex = state.categories.findIndex(
        (category) => category.name === payload.oldCategory
      );

      // Get the new category index by the category name
      const newCategoryIndex = state.categories.findIndex(
        (category) => category.name === payload.newCategory
      );

      // Get the category items
      const oldCategoryItems = state.categories[oldCategoryIndex].items;
      const newCategoryItems = state.categories[newCategoryIndex].items;

      // Remove the item from its original category
      const [removedItem] = oldCategoryItems.splice(payload.oldItemIndex, 1);

      // Insert into the new category at the provided position
      newCategoryItems.splice(payload.newItemIndex, 0, removedItem);
    },
  },
});

export const {
  deleteBoardItem,
  createBoardItem,
  moveItemInCategory,
  moveItemToOtherCategory,
} = boardSlice.actions;

export default boardSlice;
