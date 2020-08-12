import React from "react";
import styled from "styled-components";
import { Input, Select, Form } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { FormInstance } from "antd/lib/form";

interface IProps {
  form: FormInstance;
}

export const AddBoardItemForm = (props: IProps) => {
  const categories = useSelector((state: RootState) =>
    state.board.categories.map((category) => category.name)
  );

  return (
    <BoardItemForm form={props.form}>
      <Form.Item
        name="Category"
        label="Category"
        rules={[{ required: true, message: "Please choose a Category!" }]}
      >
        <Select>
          {
            // TODO: Disable adding an item if there are no categories
            categories.length > 0 &&
              categories.map((category) => (
                <Select.Option key={category} value={category}>
                  {category}
                </Select.Option>
              ))
          }
        </Select>
      </Form.Item>

      <Form.Item
        name="Description"
        label="Description"
        rules={[{ required: true, message: "Please input your Description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="Tags" label="Tags" rules={[{ required: false }]}>
        <Input />
      </Form.Item>
    </BoardItemForm>
  );
};

const BoardItemForm = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;
`;

export default AddBoardItemForm;
