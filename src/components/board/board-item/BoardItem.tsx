import React, { useState } from "react";
import styled from "styled-components";
import { Skeleton, List, Card, Tag, Modal, Form } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Store } from "antd/lib/form/interface";

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
    console.log(values);

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

  return (
    <BoardItemWrapper>
      <ItemCard
        actions={[
          <DeleteOutlined key="delete" onClick={deleteItemHandler} />,
          <EditOutlined key="edit" onClick={() => setModalVisibility(true)} />,
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
            tags: item.tags ? item.tags.join(" ") : "",
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

export default BoardItem;
