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
  color: #515A6E;
  padding-right: 24px;

`;

const Indicator = styled.div`
  border: 2px solid #0075FF;
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 2px;
  left: -1.5em;


  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    border: 2px solid #0075FF;
    border-radius: 1em;
    background-color: #0075FF;
    width: 0.5em;
    height: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }

`;

export default function RadioButton({
  value,
  onChange,
  name,
  id,
  label,
  checked
}) {
  return (
    <Label htmlFor={id}>
      {label}
      <Input
        id={id}
        type="radio"
        role="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <Indicator />
    </Label>
  );
}
