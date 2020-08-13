import { IBoardState } from "./boardSlice";
import { BoardTagColors } from "../../../types/BoardTypes";

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
          author: {
            name: "Jane Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-1",
              color: BoardTagColors.MAGENTA,
            },
          ],
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "John Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-2",
              color: BoardTagColors.RED,
            },
          ],
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "Jane Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-3",
              color: BoardTagColors.VOLCANO,
            },
          ],
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
          author: {
            name: "Jane Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-4",
              color: BoardTagColors.ORANGE,
            },
          ],
        },
        {
          id: 9,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "Jane Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-5",
              color: BoardTagColors.GOLD,
            },
          ],
        },
        {
          id: 10,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "John Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-6",
              color: BoardTagColors.LIME,
            },
          ],
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
          author: {
            name: "John Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-7",
              color: BoardTagColors.GREEN,
            },
          ],
        },
        {
          id: 12,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "Jane Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-8",
              color: BoardTagColors.CYAN,
            },
          ],
        },
        {
          id: 13,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "Jane Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-9",
              color: BoardTagColors.BLUE,
            },
          ],
        },
        {
          id: 14,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "Jane Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-10",
              color: BoardTagColors.GEEKBLUE,
            },
          ],
        },
        {
          id: 15,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet a lectus at efficitur. Sed vestibulum risus massa, nec ullamcorper diam congue sed.",
          author: {
            name: "John Doe",
            profilePicture: {
              path:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
          tags: [
            {
              text: "React",
              color: BoardTagColors.CYAN,
            },
            {
              text: "CSS",
              color: BoardTagColors.ORANGE,
            },
            {
              text: "Test-11",
              color: BoardTagColors.PURPLE,
            },
          ],
        },
      ],
    },
  ],
};

export default initialBoardState;
