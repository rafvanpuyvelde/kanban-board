import React, { ReactNode } from "react";
import { Modal } from "antd";

interface IProps {
  children: ReactNode;
  title: string;
  okText: string;
  cancelText: string;
  isVisible: boolean;
  onContinueHandler: (data: any) => void;
  onCancelHandler: () => void;
}

export const ModalForm = (props: IProps) => {
  return (
    <Modal
      visible={props.isVisible}
      title={props.title}
      okText={props.okText}
      cancelText={props.cancelText}
      onCancel={props.onCancelHandler}
      onOk={props.onContinueHandler}
    >
      {props.children}
    </Modal>
  );
};

export default ModalForm;
