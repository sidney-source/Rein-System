import { useState } from "react";
import styled from "styled-components";

const InputBox = (props) => {
   const [focused, setFocused] = useState(false);
   const { label, errorMessage, onChange, id, ...inputProps } = props;

   const handleFocus = (e) => {
      setFocused(true);
   };

   return (
      <InputBx>
         <label>{label}</label>
         <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
               inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
         />
         <span>{errorMessage}</span>
      </InputBx>
   );
};

const InputBx = styled.div`
   display: flex;
   flex-direction: column;
   width: auto;
   height: 65px;

   input {
      padding: 3px;
      margin: 3px 0px;
      height: 19px;
      width: 150px;
      width: fit-content;
      border-radius: 5px;
      border: 1px solid gray;
      font-size: 0.7rem;
      outline: none;
      font-family: "Livvic", sans-serif;
      :hover,
      :focus {
         border: 1px solid blue;
      }
   }
   input[type="Number"] {
      padding: 3px;
      margin: 3px 0px;
      width: 50px;
      border-radius: 5px;
      font-size: 0.7rem;
      border: 1px solid blue;
      outline: none;
      overflow: visible;
      font-family: "Livvic", sans-serif;
      :hover,
      :focus {
         border: 1px solid blue;
      }
   }
   input[type="Date"] {
      padding: 3px;
      margin: 3px 0px;
      width: 90px;
      border-radius: 5px;
      border: 1px solid blue;
      outline: none;
      font-size: 0.7rem;
      overflow: visible;
      font-family: "Livvic", sans-serif;
      :hover,
      :focus {
         border: 1px solid blue;
      }
   }
   input[type="Date"]::-webkit-calendar-picker-indicator {
      margin-left: 0px;
      margin-right: 0px;
   }
   input[type="Number"]::-webkit-calendar-picker-indicator {
      margin-left: 0px;
      margin-right: 0px;
   }
   label {
      font-size: 0.7rem;
      font-weight: 200;
      margin: 0px;
      display: inline-block;
      color: grey;
   }

   span {
      font-size: 10px;
      padding: 0px;
      color: red;
      display: none;
      text-align: wrap;
      height: 10px;
      flex-wrap: wrap;
   }

   input:invalid[focused="true"] {
      border: 1px dashed red;
   }

   input:invalid[focused="true"] ~ span {
      display: block;
   }
`;

export default InputBox;
