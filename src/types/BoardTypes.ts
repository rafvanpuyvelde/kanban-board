export interface IBoardCategoryList {
  name: string;
  categories: IBoardCategory[];
}

export interface IBoardCategory {
  name: string;
  listItems: IBoardCategoryListItem[];
}

export interface IBoardCategoryListItem {
  id: number;
  description: string;
  tags: string[];
  author: string;
}
