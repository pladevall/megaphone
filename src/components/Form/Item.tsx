import '@ant-design/compatible/assets/index.css'

import { Form as AntForm } from '@ant-design/compatible'
import React, { Children, FC } from 'react'
import styled, { css } from 'styled-components'

const { Item: AntItem } = AntForm

const Item = styled(({ align, mt, mb, ...props }) => <AntItem {...props} />)<any>`
  @media (min-width: 426px) {
    /* Space out children on non-mobile screens */
    ${({ count }) =>
      count > 1 &&
      css`
        div.ant-row.ant-form-item {
          display: inline-block;
          margin-bottom: 0;
          width: ${(100 - (count - 1) * 2) / count}%;
          &:not(:last-child) {
            margin-right: 2%;
          }
        }
      `}
  }

  /* On mobile screens remove margin */
  @media (max-width: 425px) {
    margin-bottom: 0;
  }

  /* Styling for the label */
  div.ant-col.ant-form-item-label {
    font-weight: bold;
    line-height: normal;
  }

  /* Control alignment of item children */
  & > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children {
    ${(props) =>
      props.align &&
      css`
        display: flex;
        justify-content: ${props.align};
        align-items: center;
      `}
  }

  /* Apply Margin-Top or Margin-Bottom Property */
  ${({ mt, mb }) => css`
    margin-top: ${mt && typeof mt === 'boolean' ? 'auto' : mt};
    margin-bottom: ${mb && typeof mb === 'boolean' ? 'auto' : mb};
  `}
`

export interface FormItemProps {
  [key: string]: any
  mt?: string | boolean
  mb?: string | boolean
  align?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'initial'
    | 'inherit'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
}

const ItemComponent: FC<FormItemProps> = ({ children, ...props }) => {
  return (
    <Item colon={false} count={Children.count(children)} {...props}>
      {children}
    </Item>
  )
}

export default ItemComponent
