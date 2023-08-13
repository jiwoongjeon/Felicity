import { React, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  // styling
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
  border-radius: 0.15em;
  outline: none;
  cursor: pointer;
  // change the color
  accent-color: #0075ff;
`;

const Label = styled.label`
  // display setting
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // styling
  font-size: 0.7em;
  font-style: normal;
  font-weight: 550;
  text-align: left;
  align-self: center;
`;

export default function Checkbox({ value, name, id, label }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Label htmlFor={id}>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span> {label} </span>
    </Label>
  );
};
