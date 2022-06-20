import { Button, Grid, Paper, Tooltip } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import CustomSelect from "./CustomSelect";
import CustomSelectWthBtn from "./CustomSelectWthButton";
import InputBox from "./InputBox";
import { Security } from "../Data/Usersdata";
import EditIcon from "@mui/icons-material/Edit";
import SecurityTable from "./SecurityTables";
export const ClientDetailsPage = (props) => {
   const inputs = [
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
         errorMessage: "Only %",
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
         errorMessage: "Only %",
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
   ];
   const Reindata = [
      {
         id: "1",
         name: " African Reinsurance Corporation",
      },
      {
         id: "2",
         name: "CIC General Insurance Company Limited",
      },
      {
         id: "3",
         name: "Zep Re ( PTA Reinsurance Company)",
      },
   ];
   const inptRskDtls = [
      {
         id: 1,
         name: "SumInsured",
         type: "text",
         placeholder: "Sum Insured",
         label: "Sum Insured",
         errorMessage: "Input a Whole Number",
         pattern: "^[0-9]*$",
         required: true,
      },
      {
         id: 2,
         name: "100%Premium",
         type: "text",
         placeholder: "100% Premium",
         label: "100% Premium",
         errorMessage: "Input a Whole Number",
         pattern: "^[0-9]*$",
         required: true,
      },
      {
         id: 3,
         name: " OurOrderPremium",
         type: "text",
         disabled: "true",
         placeholder: "  Our Order Premium",

         label: "Our Order Premium",
         required: false,
      },
      {
         id: 4,
         name: "Premium Tax",
         type: "number",
         placeholder: "0.0%",
         errorMessage: "% only",
         label: "Prem Tax",
         pattern: "^[0-9]*10",
         required: false,
      },
      {
         id: 3,
         name: " Commission",
         type: "number",
         placeholder: "0.0%",
         label: "Commission",
         width: 100,
         required: true,
      },
   ];
   const SecuritykDtls = [
      {
         id: 1,
         name: " Witholding Tax",
         type: "number",
         placeholder: "0.0%",
         label: "WthTax",

         required: false,
      },
      {
         id: 2,
         name: " Brk ",
         type: "number",
         placeholder: "0.0%",
         label: "Brokerage",
         width: 100,
         required: false,
      },
   ];
   const Insured = [
      {
         id: "1",
         name: "Sidney Mutai",
      },
      {
         id: "2",
         name: "Elsie Keter",
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

   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };

   const [values, setValues] = useState("");
   function onSelectChange(event) {
      console.log(event.target.value);
   }

   return (
      <Containerd>
         <Container2>
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
                     <Tooltip title="Edit">
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
                     </Tooltip>
                     {/* Top Nav Details Delete Button */}
                     <Tooltip title="Clear Form">
                        <IconButton
                           aria-label="delete"
                           color="success"
                           size="small"
                        >
                           <DeleteIcon size="large" color="error" />
                        </IconButton>
                     </Tooltip>
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
                  <CustomSelectWthBtn
                     label="Insured"
                     data={Insured}
                     onChange={onSelectChange}
                  />
                  {/* Insurance Company Select Button */}
                  {inptRskDtls.map((input) => (
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
                  p: 0.5,

                  display: "grid",
                  width: "40%",
                  gap: 1,
                  margin: 0.5,
                  marginLeft: 0,
               }}
            >
               <Grid
                  sx={{
                     p: 0,
                     display: "grid",
                     gap: 0,
                     margin: 0.5,
                  }}
               >
                  <DetailsCard>
                     <h1>Cover Sumarry</h1>
                     <DtlsCardContent>
                        <h3>Premium $ 12,456</h3>
                        <h2>Pending</h2>
                     </DtlsCardContent>
                     <DtlsCardContainer>
                        <DtlsCardContent>
                           <h4>Insurance Company</h4>
                           <h5>James Wood Ins</h5>
                        </DtlsCardContent>
                        <DtlsCardContent>
                           <h4>Type of Reisnurance Cover</h4>
                           <h5>Facultative</h5>
                        </DtlsCardContent>
                        <DtlsCardContent>
                           <h4>Country of Policy </h4>
                           <h5>Kenya</h5>
                        </DtlsCardContent>

                        <DtlsCardContent>
                           <h4>Inception Date</h4>
                           <h5>Wednesday 14th 2020</h5>
                        </DtlsCardContent>
                        <DtlsCardContent>
                           <h4>order</h4>
                           <h5>40%</h5>
                        </DtlsCardContent>
                        <DtlsCardContent>
                           <h4>100% Sum Insured</h4>
                           <h5>234,567,904</h5>
                        </DtlsCardContent>
                        <DtlsCardContent>
                           <h4>Commission</h4>
                           <h5>30%</h5>
                        </DtlsCardContent>
                     </DtlsCardContainer>
                  </DetailsCard>
               </Grid>
            </Paper>
         </Container2>
         <Container3>
            <Paper
               elevation={1}
               variant="outlined"
               sx={{
                  p: 0.5,

                  display: "flex",
                  flexDirection: "column    ",
                  gap: 1,
                  margin: 0.5,
                  marginTop: 0,
                  width: "100%",
               }}
            >
               <DtlsTopNav>
                  <h3>Security Details</h3>
                  <div
                     style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "normal",
                     }}
                  >
                     <CustomSelectWthBtn
                        label="Reinsurer"
                        data={Reindata}
                        onChange={onSelectChange}
                     />
                     {SecuritykDtls.map((input) => (
                        <InputBox
                           key={input.id}
                           {...input}
                           value={values[input.name]}
                           onChange={onChange}
                           autoWidth={false}
                        />
                     ))}
                     <Tooltip title="Add">
                        <Button
                           variant="contained"
                           color="success"
                           sx={{
                              p: 0,
                              mt: 1.7,
                              display: "flex",
                              height: 30,
                              fontSize: 12,
                           }}
                           endIcon={<AddCircleOutlineIcon />}
                        >
                           Add
                        </Button>
                     </Tooltip>
                  </div>
                  <BtnGrp1>
                     {/* Top Nav Details Edit Button */}
                     <Tooltip title="Edit">
                        <Button
                           variant="contained"
                           sx={{
                              p: 0,
                              display: "flex",
                              height: 30,
                              fontSize: 12,
                           }}
                           endIcon={<EditIcon />}
                        >
                           Edit
                        </Button>
                     </Tooltip>
                     {/* Top Nav Details Delete Button */}
                     <Tooltip title="Clear">
                        <IconButton
                           aria-label="delete"
                           color="success"
                           size="small"
                        >
                           <DeleteIcon size="large" color="error" />
                        </IconButton>
                     </Tooltip>
                     {/* Top Nav Details Save Button */}
                  </BtnGrp1>
               </DtlsTopNav>
            </Paper>
         </Container3>

         <Container3>
            <Paper
               elevation={1}
               variant="outlined"
               sx={{
                  p: 0.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  margin: 0.5,
                  overflowX: "hidden",
                  overflowY: "scroll",
                  marginTop: 0,
                  height: "160px",
                  width: "100%",
               }}
            >
               <SecurityTable data={Security} />
            </Paper>
         </Container3>
      </Containerd>
   );
};

const Containerd = styled.div`
   margin: 0px;
   display: flex;
   flex-direction: column;
`;
const Container2 = styled.div`
   margin: 0px;
   display: flex;
`;
const Container3 = styled.div`
   margin: 0px;
   display: flex;
`;
const DtlsTopNav = styled.div`
   display: flex;
   position: relative;
   justify-content: space-between;
   vertical-align: middle;
   height: 45px;
`;
const DetailsCard = styled.div`
   display: flex;
   white-space: pre-wrap;
   flex-direction: column;
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

const DtlsCardContainer = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   gap: 0;
`;
const DtlsCardContent = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin: 0;
   height: 20px;
   h3 {
      color: green;
      margin-top: 5px;
   }
   h2 {
      margin-top: 5px;
      color: red;
   }
`;

export default ClientDetailsPage;
