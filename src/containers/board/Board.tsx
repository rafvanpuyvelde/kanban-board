import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import styled from "styled-components";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Store } from "antd/lib/form/interface";

import BoardCategoryList from "../../components/board/board-category-list/BoardCategoryList";
import BoardItemForm from "../../components/board/board-item-form/BoardItemForm";
import ModalForm from "../../../src/components/forms/modal-form/ModalForm";
import { createBoardItem } from "../../store/slices/board/boardSlice";

export const Board = () => {
  const [form] = Form.useForm();
  const board = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();

  const [modalIsVisible, setModalVisibility] = useState(false);

  const addItemFormHandler = () => {
    form
      .validateFields()
      .then((values) => {
        addItemFormSuccessHandler(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const addItemFormSuccessHandler = (values: Store) => {
    // Reset form
    setModalVisibility(false);
    form.resetFields();

    // Split tags into list of separate tags
    if (values.tags) values.tags = getTagsFromFormValues(values);

    // Add the item to the store
    dispatch(
      createBoardItem({
        category: values.category,
        description: values.description,
        tags: values.tags,
      })
    );
  };

  const getTagsFromFormValues = (values: Store): string[] => {
    return values.tags.split(" ");
  };

  return (
    <div>
      <BoardHeadingWrapper>
        <BoardName>{board.name}</BoardName>

        <Button
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => {
            setModalVisibility(true);
          }}
        >
          Add item
        </Button>

        <ModalForm
          title="Create new item"
          okText="Create"
          cancelText="Cancel"
          isVisible={modalIsVisible}
          onContinueHandler={addItemFormHandler}
          onCancelHandler={() => {
            setModalVisibility(false);
          }}
        >
          <BoardItemForm form={form} />
        </ModalForm>
      </BoardHeadingWrapper>

      <BoardCategoryList categories={board.categories} />
    </div>
  );
};

const BoardHeadingWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 1000px) {
    align-items: flex-start;
  }
`;

const BoardName = styled.h1`
  color: gray;
`;

export default Board;
