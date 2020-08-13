import React from "react";
import styled from "styled-components";
import { Input, Select, Form } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { FormInstance } from "antd/lib/form";
import { BoardCategory } from "../../../types/BoardTypes";

export type BoardItemFormData = {
  description: string;
  tags: string;
};

interface IProps {
  form: FormInstance;
  initialValues?: BoardItemFormData;
}

export const BoardItemForm = (props: IProps) => {
  const isEditForm = props.initialValues !== undefined;

  const categories = useSelector((state: RootState) =>
    state.board.categories.map((category: BoardCategory) => category.name)
  );

  return (
    <BoardItemFormWrapper form={props.form} initialValues={props.initialValues}>
      <Form.Item
        name="category"
        label="Category"
        rules={[
          { required: !isEditForm, message: "Please choose a Category!" },
        ]}
      >
        <Select disabled={isEditForm}>
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
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please input your Description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="tags" label="Tags" rules={[{ required: false }]}>
        <Input />
      </Form.Item>
    </BoardItemFormWrapper>
  );
};

const BoardItemFormWrapper = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;
`;

export default BoardItemForm;
