import React, { PropTypes } from 'react'
import { Textfield } from 'react-mdl'

const TextInput = (props) => {
  const {action, value, style, max, label, disabled} = props

  return (
    <Textfield
      min="0" max={max}
      autoComplete="off"
      type="number"
      onChange={action}
      pattern="-?[0-9]*(\.[0-9]+)?"
      error={"Välj mellan 0-" + (max) + "!"} label={label}
      floatingLabel
      value={value}
      style={style}
      disabled={disabled}
    />
  )
}

TextInput.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  max: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default TextInput
