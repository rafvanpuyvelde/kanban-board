import React from "react";

import BoardCategoryList from "../board-category-list/BoardCategoryList";
import { IBoardCategoryList } from "../../types/BoardTypes";

export const Board = () => {
  const boardCategories: IBoardCategoryList = {
    name: "Kanban board",
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
            author: "Jane Doe",
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
            author: "Jane Doe",
            tags: ["React", "CSS"],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>{boardCategories.name}</h1>
      <BoardCategoryList categories={boardCategories.categories} />
    </div>
  );
};

export default Board;
