import { createSlice } from "@reduxjs/toolkit";
import { IBoardCategoryList } from "../../types/BoardTypes";

export interface BoardState extends IBoardCategoryList {
  users: string[];
}

const initialBoardState: BoardState = {
  name: "Kanban board",
  users: ["Jane Doe", "John Doe"],
  categories: [
    {
      name: "TO DO",
      listItems: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
      ],
    },
    {
      name: "IN PROGRESS",
      listItems: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 4,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
      ],
    },
    {
      name: "CODE REVIEW",
      listItems: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS"],
        },
      ],
    },
    {
      name: "DONE",
      listItems: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 4,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "Jane Doe",
          tags: ["React", "CSS"],
        },
        {
          id: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: "John Doe",
          tags: ["React", "CSS"],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState: initialBoardState,
  reducers: {},
});

export default boardSlice;
