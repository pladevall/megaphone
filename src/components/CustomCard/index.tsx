import React, { useState, useContext } from "react";
import { Col, Upload, Modal, Card, message, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { Formik } from "formik";

import { UploadOutlined } from "@ant-design/icons";
import Form, { Field } from "../Form";
import { UserContext } from "../../providers/UserProvider";
import SubmitButton from "../Button";
import UpgradeModal from "../Checkout/Modal";

interface Values {
  avatar: string[];
  firstName: string;
  lastName: string;
  email: string;
}

const CustomCard = styled(Card)`
  width: 8rem;
  height: 10rem;
  cursor: pointer;
  border: 1px solid #dadada;
  padding: 1rem;
  font-size: 40px;
  text-align: center;
`;

const CustomCardComponent = () => {
  const authUser = useContext(UserContext);
  const [state, setState] = useState({ visible: false });

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = (e: any) => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleSubmit = () => {
    console.log("I AM BEIGN SUBMITTED");
  };

  const initialValues: Values = {
    avatar: [],
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@gmail.com",
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <CustomCard onClick={showModal}>+</CustomCard>
      {authUser ? (
        <UpgradeModal state={state} setState={setState} />
      ) : (
        <Modal
          title="Upload Your Sound"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isValid, values, initialValues }) => (
              <Form>
                <Col>
                  <Field.Avatar name="avatar" itemProps={{ mt: "1.5rem" }} />
                  <Field.Input
                    name="name"
                    placeholder="Card Name"
                    prefix={<UserOutlined />}
                  />
                  <Upload {...props}>
                    <Button>
                      <UploadOutlined /> Click to Upload
                    </Button>
                  </Upload>
                </Col>
                <SubmitButton
                // disabled={}
                >
                  Update
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
};

export default CustomCardComponent;
