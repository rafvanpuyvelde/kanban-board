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
  tags: string[];
  author: string;
};
