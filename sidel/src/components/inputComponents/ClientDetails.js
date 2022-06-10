import { Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import CustomSelect from "./CustomSelect";
import CustomSelectWthBtn from "./CustomSelectWthButton";
import InputBox from "./InputBox";

export const ClientDetailsPage = (props) => {
   const inputs = [
      {
         id: 4,
         name: "OurReference",
         type: "text",
         placeholder: "Our Reference",
         label: "Our Reference",
         required: false,
      },
      {
         id: 2,
         name: "InceptionDate",
         type: "date",
         placeholder: "Inception Date",
         errorMessage: "Select an Inception Date",
         label: "Inception Date",
         required: true,
      },
      {
         id: 1,
         name: "OfferDate",
         type: "date",
         placeholder: "Offer Date",
         errorMessage: "Select an Offer Date",
         label: "Offer Date",
         required: true,
      },
      {
         id: 3,
         name: "ExpiryDate",
         type: "date",
         placeholder: "Expiry Date",
         label: "Expiry",
         required: true,
      },

      {
         id: 5,
         name: "CedantsOrder",
         type: "Number",
         errorMessage: "% Numbers Only",
         placeholder: "0.00%",
         label: "Cedants Order",
         pattern:
            "^[/^[1][0][0].[0]{2}%|[1-9]?[0-9].[0-9]{2}%$/gmA-Za-z0-9]{1,5}$",
         required: true,
      },
      {
         id: 6,
         name: "Our Order",
         type: "Number",
         placeholder: "0.00%",
         label: "Our Order",
         errorMessage: "% Numbers Only",
         pattern:
            "^[/^[1][0][0].[0]{2}%|[1-9]?[0-9].[0-9]{2}%$/gmA-Za-z0-9]{1,5}$",
         required: true,
      },
      {
         id: 7,
         name: "NewBusiness",
         type: "checkBox",
         label: "New Business",
      },
      {
         id: 8,
         name: "Renewable",
         type: "checkBox",
         label: "Renewable",
      },
   ];
   const Insdata = [
      {
         id: "1",
         name: "Absa Life Assurance",
      },
      {
         id: "2",
         name: "Kenya Reinsurance Corporation",
      },
      {
         id: "3",
         name: "Geminia Insurance",
      },
      {
         id: "4",
         name: "Sanlam Life Insurance Company",
      },
   ];
   const Typdata = [
      {
         id: "1",
         name: "Proportional",
      },
      {
         id: "2",
         name: "Non-Proportional",
      },
   ];
   const Brkdata = [
      {
         id: "1",
         name: "Minet Kenya",
      },
      {
         id: "2",
         name: "Aon Re",
      },
   ];
   const BsnClassData = [
      {
         id: "1",
         name: "Goods In Transit Stock Floater",
      },
      {
         id: "2",
         name: "Stock - Floater",
      },
   ];
   const Currdata = [
      {
         id: "1",
         name: "KES",
      },
      {
         id: "2",
         name: "EUR",
      },
      {
         id: "3",
         name: "USD",
      },
   ];
   const Countries = [
      {
         id: "1",
         name: "Kenya",
      },
      {
         id: "2",
         name: "Uganda",
      },
      {
         id: "3",
         name: "Tanzania",
      },
   ];
   const keys = [
      "Insured",
      "Reference",
      "Our_Order",
      "Period",
      "Type",
      "Risk_Class",
      "Currency",
      "Status",
   ];
   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };
   const [query, setQuery] = useState("");
   const [values, setValues] = useState("");
   function onSelectChange(event) {
      console.log(event.target.value);
   }
   return (
      <Containerd>
         <Container1>
            {/* Details Paper  */}
            <Paper
               elevation={1}
               variant="outlined"
               sx={{
                  p: 0.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  margin: 0.5,
                  width: 720,
               }}
            >
               <DtlsTopNav>
                  <h1>Client Details</h1>
                  <BtnGrp1>
                     {/* Top Nav Details Add Button */}
                     <Button
                        variant="contained"
                        sx={{
                           p: 1,
                           display: "flex",
                           height: 30,
                           fontSize: 12,
                        }}
                        endIcon={<AddCircleOutlineIcon />}
                     >
                        Edit
                     </Button>
                     {/* Top Nav Details Delete Button */}
                     <IconButton
                        aria-label="delete"
                        color="success"
                        size="small"
                     >
                        <DeleteIcon size="large" color="error" />
                     </IconButton>
                     {/* Top Nav Details Save Button */}
                     <IconButton aria-label="Save" color="success" size="small">
                        <SaveTwoToneIcon color="success" />
                     </IconButton>
                  </BtnGrp1>
               </DtlsTopNav>
               <DtlsBodyNav>
                  {/* Insurance Company Select Button */}
                  <FormContWraper>
                     <CustomSelectWthBtn
                        label="Cedant"
                        data={Insdata}
                        onChange={onSelectChange}
                     />
                     {/* Broker Company Select Button */}
                     <CustomSelectWthBtn
                        label="Broker"
                        data={Brkdata}
                        onChange={onSelectChange}
                     />
                     {/* Type Company Select Button */}
                     <CustomSelectWthBtn
                        label="Type"
                        data={Typdata}
                        onChange={onSelectChange}
                     />
                     <CustomSelect
                        label="Country"
                        data={Countries}
                        onChange={onSelectChange}
                     />
                     <CustomSelect
                        label="Currency"
                        data={Currdata}
                        onChange={onSelectChange}
                     />
                     <CustomSelect
                        label="Assigned To"
                        data={Typdata}
                        onChange={onSelectChange}
                     />
                     {/* BsnsClass Company Select Button */}
                     <CustomSelectWthBtn
                        label="Class"
                        data={BsnClassData}
                        onChange={onSelectChange}
                     />
                     {/* SubClass Company Select Button */}
                     <CustomSelectWthBtn
                        label="Sub Class"
                        data={Typdata}
                        onChange={onSelectChange}
                     />
                     {/* Sub Type Company Select Button */}
                     <CustomSelectWthBtn
                        label="Sub Type"
                        data={Typdata}
                        onChange={onSelectChange}
                     />
                     {/* currency Select  */}
                  </FormContWraper>

                  {inputs.map((input) => (
                     <InputBox
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                        autoWidth={false}
                     />
                  ))}
               </DtlsBodyNav>
            </Paper>
            <Paper
               elevation={1}
               variant="outlined"
               sx={{
                  p: 2,
                  bgcolor: "lightblue",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 1,
                  margin: 0.5,
               }}
            >
               <Grid>hi</Grid>
            </Paper>
         </Container1>
         <Container2>
            <Paper
               elevation={1}
               variant="outlined"
               sx={{
                  p: 2,
                  bgcolor: "lightblue",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 1,
                  margin: 0.5,
               }}
            >
               <Grid>hi</Grid>
            </Paper>
         </Container2>
      </Containerd>
   );
};

const Containerd = styled.div`
   margin: 0px;
   display: flex;
   flex-direction: column;
`;
const Container1 = styled.div`
   margin: 0px;
   display: flex;
   flex
`;
const Container2 = styled.div`
   margin: 0px;
   display: flex;
`;
const DtlsTopNav = styled.div`
   display: flex;
   align-items: baseline;
   position: relative;
   justify-content: space-between;
   vertical-align: middle;
`;
const FormContWraper = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 3px;
   span {
      font-size: 13px;
   }
`;
const BtnGrp1 = styled.div`
   display: flex;
   vertical-align: middle;
   align-items: center;
   justify-content: center;
   gap: 3px;
`;

const DtlsBodyNav = styled.div`
   display: flex;
   margin: 0px;
   position: relative;
   flex-wrap: wrap;
   gap: 5px;
`;
export default ClientDetailsPage;
