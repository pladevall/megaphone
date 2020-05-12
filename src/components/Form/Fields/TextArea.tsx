import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import { getIn, useFormikContext } from 'formik'
import React, { FC } from 'react'

import Item, { FormItemProps } from '../Item'

interface Props extends TextAreaProps {
  label?: string
  itemProps?: FormItemProps
}

const TextAreaComponent: FC<Props> = ({ itemProps, label, ...props }) => {
  const name = props.name || ''
  const { values, touched, errors, handleChange, handleBlur } = useFormikContext()

  const value = getIn(values, name)
  const error = getIn(touched, name) && getIn(errors, name)

  return (
    <Item label={label} help={error} validateStatus={error ? 'error' : ''} {...itemProps}>
      <Input.TextArea value={value} onChange={handleChange} onBlur={handleBlur} {...props} />
    </Item>
  )
}

export default TextAreaComponent
