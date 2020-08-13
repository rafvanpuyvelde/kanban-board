import { IBoardState } from "./boardSlice";

// File is for demo purposes only
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

export default initialBoardState;
