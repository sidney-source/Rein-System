import React, { useState } from "react";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CustomSelectWthBtn(props) {
   const [data] = useState(props.data);
   const [selectedData, updateSelectedData] = useState("");
   const { label, errorMessage } = props;

   function handleChange(event) {
      updateSelectedData(event.target.value);
      if (props.onSelectChange) props.onSelectChange(selectedData);
   }

   let options = data.map((data) => (
      <option key={data.id} value={data.id}>
         {data.name}
      </option>
   ));

   return (
      <Cselect>
         <label>{label}</label>
         <Cselect1>
            <select name="customSearch" onChange={handleChange}>
               <option>Select</option>
               {options}
            </select>
            <AddCircleIcon sx={{ cursor: "pointer" }} color="success" />
         </Cselect1>
         <span>{errorMessage}</span>
      </Cselect>
   );
}

const Cselect = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0px;
   label {
      font-size: 11px;
      font-weight: 300;
      color: grey;
      margin-left: 4px;
   }
   select {
      padding: 2px;
      margin: 2px 0px;
      height: 27px;
      border-radius: 5px;
      border: 1px solid gray;
      outline: none;
      width: fit-content;
      font-family: "Livvic", sans-serif;
      :hover,
      :focus {
         border: 2px solid blue;
      }
   }
`;
const Cselect1 = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 2px;
`;

export default CustomSelectWthBtn;
