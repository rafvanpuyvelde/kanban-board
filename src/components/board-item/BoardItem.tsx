import React from "react";
import styled from "styled-components";
import { Skeleton, List, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { IBoardCategoryListItem } from "../../types/BoardTypes";

const { Meta } = Card;

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
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
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
  box-shadow: 5px 8px 24px 5px rgba(208, 216, 243, 0.6);
`;

export default BoardItem;
