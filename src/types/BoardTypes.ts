//
// Board types
//

// The parent board type containing a list of category's
export type BoardCategoryList = {
  name: string;
  categories: BoardCategory[];
};

// A board category containing a list of board items
export type BoardCategory = {
  name: string;
  items: BoardCategoryListItem[];
};

// A board item containing some basic details
export type BoardCategoryListItem = {
  id: number;
  description: string;
  tags: BoardTag[];
  author: BoardUser;
};

// A tag used to describe a board item
export type BoardTag = {
  text: string;
  color: string;
};

// A board user
export type BoardUser = {
  name: string;
  profilePicture: BoardProfilePicture;
};

// A user profile picture
export type BoardProfilePicture = {
  path: string;
};

// The available board tag colors
export enum BoardTagColors {
  MAGENTA = "magenta",
  RED = "red",
  VOLCANO = "volcano",
  ORANGE = "orange",
  GOLD = "gold",
  LIME = "lime",
  GREEN = "green",
  CYAN = "cyan",
  BLUE = "blue",
  GEEKBLUE = "geekblue",
  PURPLE = "purple",
}
