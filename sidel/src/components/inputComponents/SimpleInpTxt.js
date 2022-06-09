import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
function SimInpTxt(props) {
   const [value, updateValue] = useState("");
   const { label, errorMessage, ...inputProps } = props;

   function handleChange(event) {
      updateValue(event.target.value);
      if (props.onSelectChange) props.onSelectChange(updateValue);
   }

   return (
      <Cselect>
         <label>{label}</label>
         <input {...inputProps} value={value}></input>
         <span>{errorMessage}</span>
      </Cselect>
   );
}

const Cselect = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0px;
   background-color: transparent;
   label {
      font-size: 11px;
      font-weight: 300;
      margin-left: 3px;
      color: grey;
   }
   input {
      padding: 2px;
      margin: 2px 0px;
      height: 21px;
      border-radius: 5px;
      border: 1px solid grey;
      display: flex;
      outline: none;
      width: fit-content;
      font-family: "Livvic", sans-serif;
      :hover,
      :focus {
         border: 2px solid blue;
      }
   }
   input[type="Number"] {
      padding: 2px;
      margin: 3px 0px;
      height: 21px;
      display: flex;
      width: 60px;
      border-radius: 5px;
      font-size: 0.7rem;
      border: 1px solid grey;
      outline: none;
      overflow: visible;
      font-family: "Livvic", sans-serif;
      :hover,
      :focus {
         border: 2px solid blue;
      }
   }
`;

export default SimInpTxt;
