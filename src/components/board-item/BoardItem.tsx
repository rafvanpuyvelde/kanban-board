import React from "react";
import styled from "styled-components";

import { List } from "antd";
import { IBoardCategoryListItem } from "../../types/BoardTypes";

export interface IProps {
  item: IBoardCategoryListItem;
}

export const BoardItem = ({ item }: IProps) => {
  return <BoardItemWrapper>{JSON.stringify(item)}</BoardItemWrapper>;
};

const BoardItemWrapper = styled(List.Item)`
  color: red;
`;

export default BoardItem;
