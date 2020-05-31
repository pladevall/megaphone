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
  background: #f5a623;
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  cursor: pointer;

  &:hover {
    background: #f49b0b;
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
      <Row>
        <Col
          style={{
            background: "#FEE140",
            backgroundImage:
              "linear-gradient(270deg, #FEE140 0%, #FA709A 100%)",
            width: "5%",
          }}
        >
          <div style={{ height: "100%" }}>{""}</div>
        </Col>
        <Col style={{ padding: "1rem" }}>
          <ModalHeader>Upgrade to Pro</ModalHeader>
          <Row>

          <Col>
          <p>1. Create Your Own Cards</p>
          <p>2. Add your Own Cards</p>
          <p>3. Unlock Special Cards</p>
          </Col>
<Col>
          <Link to="/signUp">
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
