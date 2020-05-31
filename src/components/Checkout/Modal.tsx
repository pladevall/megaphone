import React from "react";
import { Modal, Col, Row } from "antd";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 0;
  }
`;

const ModalHeader = styled.div`
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  margin-right: auto;
  margin-bottom: 1rem;
`;

const UpgradeButton = styled.button`
  font-family: "Inter";
  font-weight: 500;
  color: black;
  background: #F1C410;
  border: 2px solid black;
  -webkit-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.83);
-moz-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.83);
box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.83);
  height: 2.5rem;
  margin-left: 6rem;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #d9b00d;
  }
  &:focus {
    outline: none;
  }
`;

const UpgradeModal = ({ state, setState }) => {
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
    <StyledModal
      title={null}
      visible={state.visible}
      onOk={handleOk}
      okText="Upgrade"
      okButtonProps={{ color: "red" }}
      onCancel={handleCancel}
      footer={null}
    >
      <Row >
        <Col
          style={{
            background: "#d9b00d",
            // backgroundImage:
            //   "linear-gradient(270deg, #F1C410 0%, #000000 100%)",
            width: "5%",
          }}
        >
          <div style={{ height: "100%" }}>{""}</div>
        </Col>
        <Col style={{ padding: "1rem" }}>
          <ModalHeader>Upgrade to Pro</ModalHeader>
          <Row style={{width:"100%"}}>

          <Col>
          <p><b style={{color: 'black', fontSize: '18px', fontWeight: 'bold'}}>1.</b> Create Your Own Cards</p>
          <p><b style={{color: 'black', fontSize: '18px', fontWeight: 'bold'}}>2.</b> Save Your Favorite Cards</p>
          <p><b style={{color: 'black', fontSize: '18px', fontWeight: 'bold'}}>3.</b> Unlock 25 Extra Cards</p>
          </Col>
<Col >
          <Link to="/signUp" >
            <UpgradeButton>Upgrade to Pro</UpgradeButton>
          </Link>
</Col>
          </Row>
        </Col>
      </Row>
    </StyledModal>
  );
};

export default UpgradeModal;
