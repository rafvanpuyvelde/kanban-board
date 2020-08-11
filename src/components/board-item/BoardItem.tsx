import React from "react";
import styled from "styled-components";
import { Skeleton, List, Card, Tag } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { IBoardCategoryListItem } from "../../types/BoardTypes";

export interface IProps {
  item: IBoardCategoryListItem;
}

export const BoardItem = ({ item }: IProps) => {
  return (
    <BoardItemWrapper>
      <ItemCard
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={false} avatar active>
          <p>{item.description}</p>
          <div>
            {item.tags &&
              item.tags.map((tag) => (
                <Tag key={tag} color="cyan">
                  {tag}
                </Tag>
              ))}
          </div>
        </Skeleton>
      </ItemCard>
    </BoardItemWrapper>
  );
};

const BoardItemWrapper = styled(List.Item)`
  &&& {
    padding: 0;
    border-bottom: 0px;
    margin: 1rem;
  }
`;

const ItemCard = styled(Card)`
  border: none;
  min-width: 100%;
  min-height: 100%;
  box-shadow: 0px 6px 16px 1px rgba(208, 216, 243, 0.6);
`;

export default BoardItem;
