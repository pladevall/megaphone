import "@ant-design/compatible/assets/index.css";

import { Form as AntForm } from "@ant-design/compatible";
import { useFormikContext } from "formik";
import React, { FC } from "react";
import styled from "styled-components";

interface ContainerProps {
  maxWidth?: string | boolean;
  debug?: boolean;
}

const Container = styled.div<ContainerProps>`
  flex: 1 1 auto;
  overflow: auto;
  display: flex;
  flex-flow: column nowrap;
  max-width: ${(props) =>
    props.maxWidth && typeof props.maxWidth === "boolean"
      ? "350px"
      : props.maxWidth};
  & > div:last-child {
    margin-bottom: 0;
  }
`;

const Form = styled(AntForm)<any>`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
`;

const FormComponent: FC<any> = ({ debug, children, maxWidth, ...props }) => {
  const { handleSubmit } = useFormikContext() || {};
  return (
    <Form onSubmit={handleSubmit} {...props}>
      <Container maxWidth={maxWidth}>
        {children}
        {debug && <RenderFormik />}
      </Container>
    </Form>
  );
};

const RenderFormik = () => {
  const formik = useFormikContext();
  return <pre>{JSON.stringify(formik, null, 2)}</pre>;
};

export default FormComponent;
