import React from "react";
import styled, { keyframes } from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  color:#0075FF;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  margin: 0.6em 1em;
  font-size: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 550;
  text-align: left;

`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(45deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 2px;
  left: -1.6em;
  border: 2px solid #0075FF;
  border-radius: 0.2em;


  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: 2px solid #0075FF;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

`;

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label
}) {
  return (
    <Label htmlFor={id}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}
