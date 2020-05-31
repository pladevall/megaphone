import React, { useState, useContext } from "react";
import { Col, Upload, Modal, Card, message, Row } from "antd";
import styled from "styled-components";

import "emoji-mart/css/emoji-mart.css";
// import { Picker } from "emoji-mart";
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

const NewCard = styled(Card)`
  width: 10rem;
  height: 12.5rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  .ant-card-body {
    padding: 0;
  }
`;

// const Emoji = styled.input`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   line-height: 1;
//   font-size: 40px;
//   width: 40px;
//   color: #dadada;
//   overflow: visible;
//   margin-top: 1rem;
//   margin-bottom: 4rem;
//   `

  const UploadSoundButton = styled.button`
  font-family: "Inter";
  font-weight: 500;
  color: black;
  background: #f1f5f8;
  border: none;
  border-radius: 5px;
  margin-right: 0.5rem;
  height: 3rem;
  padding: 0 1rem;

  cursor: pointer;
  &:hover {
    background: #dae1e7;
  }
  &:active {
    background: #b8c2cc;
  }
  &:focus {
    outline: none;
  }
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

  // EMOJI handling 
// const [emoji, setEmoji] = useState({
//   text: "" 
// })


//   const handleEmojiChange = (e) => {
//     setEmoji({text: e.target.value})
//   }

//   const addEmoji = e => {
//     setEmoji({
//        text: emoji.text
//     })
//   }


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
          footer={null}
        >
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isValid, values, initialValues }) => (
              <Form>
                <Row justify='center' style={{marginBottom: '2rem'}}>

                <Col style={{marginRight: '1rem'}}>
                  <NewCard>
                    {/* <Field.Avatar name="avatar" itemProps={{ mt: "1rem" }} /> */}
                    {/* <Picker set="apple"  showPreview={false} onSelect={addEmoji} /> */}

                    {/* <Popover placement='bottom' title='hello' >
                      
                    </Popover> */}
                   
                    {/* <Emoji type="text" value={emoji.text} onChange={handleEmojiChange} placeholder="🙂" role="img" aria-label="emoji selector" >🚀</Emoji> */}

                    <Field.Input name="name" placeholder="Card Name"/>
                  </NewCard>
                </Col  >
                  <Col style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', marginLeft: '2rem'}}>
                  <Upload {...props} >
                    <UploadSoundButton>
                      <UploadOutlined /> Upload Sound
                    </UploadSoundButton>
                  </Upload>
                  </Col>
                </Row>
                
                <SubmitButton
                // disabled={}
                >
                  Upload
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
