import React, { useState } from "react";
import styled from "styled-components";
import { Skeleton, List, Card, Tag, Modal, Form } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Store } from "antd/lib/form/interface";
import { v4 as uuid } from "uuid";
import { BoardCategoryListItem } from "../../../types/BoardTypes";
import { useDispatch } from "react-redux";

import {
  deleteBoardItem,
  editBoardItem,
} from "../../../store/slices/board/boardSlice";
import ModalForm from "../../forms/modal-form/ModalForm";
import BoardItemForm from "../board-item-form/BoardItemForm";

const { confirm } = Modal;

export interface IProps {
  item: BoardCategoryListItem;
}

export const BoardItem = ({ item }: IProps) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [modalIsVisible, setModalVisibility] = useState(false);

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

  const editItemFormHandler = () => {
    form
      .validateFields()
      .then((values) => {
        editItemFormSuccessHandler(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const editItemFormSuccessHandler = (values: Store) => {
    // Reset form
    setModalVisibility(false);
    form.resetFields();

    // Split tags into list of separate tags
    if (values.tags) values.tags = getTagsFromFormValues(values);

    // Edit the existing store item
    dispatch(
      editBoardItem({
        itemId: item.id,
        description: values.description,
        tags: values.tags,
      })
    );
  };

  const getTagsFromFormValues = (values: Store): string[] => {
    return values.tags.split(" ");
  };

  const getItemTags = (item: BoardCategoryListItem): string => {
    const itemTags: string[] = item.tags.map((tag) => tag.text);
    return itemTags.join(" ");
  };

  return (
    <BoardItemWrapper>
      <ItemCard
        actions={[
          <DeleteOutlined key="delete" onClick={deleteItemHandler} />,
          <EditOutlined key="edit" onClick={() => setModalVisibility(true)} />,
        ]}
      >
        <Skeleton loading={false} avatar active>
          <ItemDescription>{item.description}</ItemDescription>

          <div>
            {item.tags &&
              item.tags.map((tag) => (
                <BoardTag key={`${tag.text}-${uuid()}`} color={tag.color}>
                  {tag.text}
                </BoardTag>
              ))}
          </div>

          <CardAuthorInfoWrapper>
            <p>{item.author.name}</p>
            <img alt="author profile" src={item.author.profilePicture.path} />
          </CardAuthorInfoWrapper>
        </Skeleton>
      </ItemCard>

      <ModalForm
        title="Edit existing item"
        okText="Save"
        cancelText="Cancel"
        isVisible={modalIsVisible}
        onContinueHandler={editItemFormHandler}
        onCancelHandler={() => {
          setModalVisibility(false);
        }}
      >
        <BoardItemForm
          form={form}
          initialValues={{
            description: item.description,
            tags: getItemTags(item),
          }}
        />
      </ModalForm>
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

const ItemDescription = styled.p`
  font-weight: 500;
`;

const CardAuthorInfoWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.5rem;

  @media only screen and (min-width: 1000px) {
    margin-top: 1rem;
  }

  p {
    margin: 0 0.5rem 0 0;
    padding: 0;
    color: gray;
    font-weight: 200;
  }

  img {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    object-fit: cover;
  }
`;

const BoardTag = styled(Tag)`
  @media only screen and (min-width: 1000px) {
    margin-top: 0.8rem;
  }
`;

export default BoardItem;
