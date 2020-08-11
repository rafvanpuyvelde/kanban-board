import React from "react";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";

interface IProps {
  categoryName: string;
  amountOfCategoryItems: number;
}

export const BoardCategoryHeader = ({
  categoryName,
  amountOfCategoryItems,
}: IProps) => {
  return (
    <CategoryTitle level={2}>
      {categoryName}
      <CategoryItemCount>{amountOfCategoryItems}</CategoryItemCount>
    </CategoryTitle>
  );
};

const CategoryTitle = styled(Title)`
  &&& {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
  }
`;

const CategoryItemCount = styled.span`
  font-size: 18px;
  font-weight: 300;
  margin-left: 0.5rem;
`;

export default BoardCategoryHeader;
