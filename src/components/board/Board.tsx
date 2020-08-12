import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import styled from "styled-components";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import BoardCategoryList from "../board-category-list/BoardCategoryList";
import AddBoardItemForm from "../add-board-item-form/AddBoardItemForm";
import ModalForm from "../modal-form/ModalForm";
import { createBoardItem } from "../../store/slices/boardSlice";

export const Board = () => {
  const [form] = Form.useForm();
  const board = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();

  const [modalIsVisible, setModalVisibility] = useState(false);

  const addItemFormHandler = () => {
    form
      .validateFields()
      .then((values) => {
        setModalVisibility(false);
        form.resetFields();
        if (values["Tags"]) values["Tags"] = values["Tags"].split(" ");
        dispatch(
          createBoardItem({
            category: values["Category"],
            description: values["Description"],
            tags: values["Tags"],
          })
        );
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
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
          <AddBoardItemForm form={form} />
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
