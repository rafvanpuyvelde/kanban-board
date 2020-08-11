import React from "react";
import styled from "styled-components";
import { Skeleton, List, Card, Tag, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { IBoardCategoryListItem } from "../../types/BoardTypes";
import { useDispatch } from "react-redux";
import { deleteBoardItem } from "../../store/slices/boardSlice";

const { confirm } = Modal;

export interface IProps {
  item: IBoardCategoryListItem;
}

export const BoardItem = ({ item }: IProps) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    confirm({
      title: "Do you want to delete this item?",
      icon: <ExclamationCircleOutlined />,
      content: <p>{item.description}</p>,
      onOk() {
        dispatch(deleteBoardItem(item.id));
      },
    });
  };

  return (
    <BoardItemWrapper>
      <ItemCard
        actions={[
          <DeleteOutlined key="delete" onClick={deleteItemHandler} />,
          <EditOutlined key="edit" />,
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
