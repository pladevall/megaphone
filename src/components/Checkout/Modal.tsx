import React from "react";
import { Modal, Col, Row } from "antd";

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
    <Modal
      title="Upgrade To Pro"
      visible={state.visible}
      onOk={handleOk}
      okText="Upgrade"
      okButtonProps={{ color: "red" }}
      onCancel={handleCancel}
      style={{ padding: 0 }}
      footer={null}
    >
      <Row justify="space-between">
        <Col>
          <div style={{ background: "red", height: "100%", width: "25%" }}>
            Hello
          </div>
        </Col>
        <Col>
          <p>Create Your Own Cards</p>
          <p>Add your Own Cards</p>
          <p>Unlock Special Cards</p>
        </Col>
      </Row>
    </Modal>
  );
};

export default UpgradeModal;
