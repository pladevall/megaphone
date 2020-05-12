import { PlusOutlined } from "@ant-design/icons";
import { Upload as UploadAnt } from "antd";
import { UploadProps } from "antd/lib/upload";
import { useFormikContext } from "formik";
import React, { FC, useState, PropsWithChildren } from "react";
import styled from "styled-components";

import Item, { FormItemProps } from "../Item";

interface DummyRequest {
  onSuccess?: any;
}

interface AvatarProps extends UploadProps {
  align?: "flex-start" | "center" | "flex-end";
  label?: string;
  itemProps?: FormItemProps;
}

const Upload = styled(UploadAnt)<AvatarProps>`
  div.ant-upload.ant-upload-select.ant-upload-select-picture-card {
    margin: 0;
  }
  &.ant-upload-picture-card-wrapper {
    display: flex;
    justify-content: ${(props) => props.align || "center"};
    align-items: center;
  }
`;

const AvatarUpload: FC<AvatarProps> = ({ label, itemProps, ...props }) => {
  const name = props.name || "avatar";

  const [fileList, setFileList] = useState([]);
  const { setFieldValue } = useFormikContext();

  const handleChange = (info: any) => {
    let files = info.fileList[info.fileList.length - 1];
    files = files ? [files] : [];
    setFieldValue(name, files);
    setFileList(files);
  };

  const handleRemove = () => {
    setFieldValue(name, []);
    setFileList([]);
  };

  return (
    <Item label={label} {...itemProps}>
      <Upload
        name={name}
        listType="picture-card"
        showUploadList={{ showPreviewIcon: false }}
        accept="image/*"
        customRequest={dummyRequest}
        fileList={fileList}
        onChange={handleChange}
        onRemove={handleRemove}
        {...props}
      >
        {!fileList.length && UploadButton}
      </Upload>
    </Item>
  );
};

export default AvatarUpload;

const dummyRequest = ({ onSuccess }: any) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

const UploadButton = (
  <div>
    <PlusOutlined />
    <div className="ant-upload-text">Upload</div>
  </div>
);
