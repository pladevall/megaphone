import React, { useState } from "react";
import { Upload, Modal, Card, message, Button } from "antd";
import styled from "styled-components";

import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info: { file: { status: string; name: any }; fileList: any }) {
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

const SoundCard = styled(Card)`
  width: 8rem;
  height: 10rem;
  cursor: pointer;
  border: 1px solid #dadada;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  /* EMOJIS */

  text-align: center;
`;

const CustomCardComponent = () => {
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

  return (
    <>
      <SoundCard onClick={showModal}>Card</SoundCard>
      <Modal
        title="Create your board"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Uploader</p>
        <p>Name</p>
        <p>Upload Sound</p>
        {/* <Upload {...props}>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload> */}
      </Modal>
    </>
  );
};

export default CustomCardComponent;
