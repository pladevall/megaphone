import Button, { ButtonHTMLType, ButtonProps } from "antd/lib/button/button";
import { useFormikContext } from "formik";
import React, { FC } from "react";
import styled from "styled-components";

interface SubmitButtonProps extends ButtonProps {
  wide?: boolean;
  htmlType?: ButtonHTMLType;
  type?: any;
}

const StyledButton = styled(Button).attrs((props) => ({
  type: props.type || "primary",
  htmlType: props.htmlType || "submit",
}))<SubmitButtonProps>`
  width: ${(props) => (props.wide ? "100%" : "auto")};
  text-transform: capitalize;
`;

const ButtonComponent: FC<SubmitButtonProps> = ({ children, ...props }) => {
  const { isSubmitting, isValid } = useFormikContext() || {};
  return (
    <StyledButton
      disabled={!isValid || isSubmitting}
      loading={isSubmitting}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;
