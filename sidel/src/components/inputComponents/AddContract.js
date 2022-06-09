import * as React from "react";
import styled from "styled-components";
import { useState, useMemo } from "react";
import InputBox from "./InputBox";
import CustomSelect from "./CustomSelect";
import CustomSelectWthBtn from "./CustomSelectWthButton";
import SimInpTxt from "./SimpleInpTxt";

import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const AddContract = (props) => {
   const [values, setValues] = useState("");
   const [query, setQuery] = useState("");
   const [activeStep, setActiveStep] = React.useState(0);
   const Users = [
      {
         id: 1,
         Insured: "Pioneer Assurance",
         Reference: "FC012313",
         Our_Order: "50%",
         Period: "01/01/2022",
         Type: "Treaty",
         Risk_Class: "Fire",
         Currency: "USD",
         Status: "Approved",
      },
      {
         id: 2,
         Insured: "Alo Chemicals",
         Reference: "FC01233",
         Our_Order: "25%",
         Period: "01/02/2022",
         Type: "Facultative",
         Risk_Class: "IAR",
         Currency: "KES",
         Status: "Approved",
      },
      {
         id: 3,
         Insured: "Sanlam Life",
         Reference: "FC01237",
         Our_Order: "22%",
         Period: "01/02/2022",
         Type: "Facultative",
         Risk_Class: "IAR",
         Currency: "UGX",
         Status: "Approved",
      },
      {
         id: 4,
         Insured: "Kenya Re",
         Reference: "FC012367",
         Our_Order: "100%",
         Period: "01/02/2022",
         Type: "Treaty",
         Risk_Class: "Fire Cat Xol Treaty",
         Currency: "USD",
         Status: "Declined",
      },
      {
         id: 5,
         Insured: "Saham Kenya",
         Reference: "FC012312",
         Our_Order: "80%",
         Period: "12/12/2021",
         Type: "Treaty",
         Risk_Class: "Eng Cat Xol Treaty",
         Currency: "USD",
         Status: "Approved",
      },
      {
         id: 6,
         Insured: "Madison Insurance",
         Reference: "FC01236",
         Our_Order: "67%",
         Period: "12/12/2021",
         Type: "Treaty",
         Risk_Class: "Eng Cat Xol Treaty",
         Currency: "USD",
         Status: "Approved",
      },
      {
         id: 7,
         Insured: "Segways Travel Limited",
         Reference: "FC01239",
         Our_Order: "34%",
         Period: "12/12/2021",
         Type: "Facultative",
         Risk_Class: "IAR",
         Currency: "KES",
         Status: "Approved",
      },
   ];

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
   const Brkdata = [
      {
         id: "1",
         name: "Minet Re Kenya",
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
   const Typedata = [
      {
         id: "1",
         name: "Proportional",
      },
      {
         id: "2",
         name: "Non-Proportional",
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

   function onSelectChange(event) {
      console.log(event.target.value);
   }
   const Search = (data) => {
      return data.filter((item) =>
         keys.some((key) => item[key].toLowerCase().includes(query))
      );
   };
   const steps = ["Client Information", "Risk Details", "Reinsurers"];

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };
   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <Container>
         <Layout>
            <TopPanel>
               <Stepper activeStep={activeStep} sx={{ width: "50%" }}>
                  {steps.map((label, index) => {
                     return (
                        <Step key={label}>
                           <StepLabel>{label}</StepLabel>
                        </Step>
                     );
                  })}
               </Stepper>
            </TopPanel>
            <SidePanels>
               <BodyNav>
                  <FormContainer>
                     <LineFormart></LineFormart>
                     <LineFormart>
                        <FormContWraper>
                           <CustomSelect
                              label="Cedant"
                              data={Insdata}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                        <FormContWraper>
                           <CustomSelect
                              label="Broker"
                              data={Brkdata}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                        <FormContWraper>
                           <CustomSelectWthBtn
                              label="Type"
                              data={Typedata}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                        <FormContWraper>
                           <CustomSelectWthBtn
                              label="Class"
                              data={BsnClassData}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                     </LineFormart>
                     <LineFormart>
                        <FormContWraper>
                           <CustomSelectWthBtn
                              label="Sub Class"
                              data={Typedata}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                        <FormContWraper>
                           <CustomSelectWthBtn
                              label="Sub Type"
                              data={Typedata}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                     </LineFormart>
                     <LineFormart>
                        <FormContWraper>
                           <CustomSelect
                              label="Currency"
                              data={Currdata}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                        {/* </LineFormart> */}
                        {inputs.map((input) => (
                           <InputBox
                              key={input.id}
                              {...input}
                              value={values[input.name]}
                              onChange={onChange}
                              autoWidth={false}
                           />
                        ))}
                        <FormContWraper>
                           <CustomSelect
                              label="Country"
                              data={Countries}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                        <FormContWraper>
                           <CustomSelect
                              label="Assigned To"
                              data={Typedata}
                              onChange={onSelectChange}
                           />
                        </FormContWraper>
                        {/* </FormContainer> */}
                        {/* <FormContainer> */}
                        {/* <LineFormart> */}
                        <CustomSelectWthBtn
                           label="Insured"
                           data={Insdata}
                           onChange={onSelectChange}
                        />
                        <CustomSelect
                           label="Risk-Description"
                           data={Typedata}
                           onChange={onSelectChange}
                        />
                        <SimInpTxt label="Premium"></SimInpTxt>
                        <SimInpTxt
                           type="Number"
                           label="Premium Tax"
                        ></SimInpTxt>
                        <SimInpTxt type="Number" label="Commission"></SimInpTxt>
                        <SimInpTxt label="Retention"></SimInpTxt>
                        <SimInpTxt label="Limit"></SimInpTxt>
                     </LineFormart>
                  </FormContainer>
               </BodyNav>
               <Layout1>
                  <FormContainer1>
                     <LineFormart>
                        <CustomSelectWthBtn
                           label="Reinsurer"
                           data={Insdata}
                           onChange={onSelectChange}
                        />

                        <SimInpTxt type="Number" label="Wth Tax"></SimInpTxt>
                        <SimInpTxt type="Number" label="Brk"></SimInpTxt>
                        <SimInpTxt type="Number" label="Prem Tax"></SimInpTxt>
                     </LineFormart>
                  </FormContainer1>
               </Layout1>
            </SidePanels>
            <BottomPanel>
               {activeStep === steps.length ? (
                  <Fragmentz>
                     <Typography sx={{ mt: 1, mb: 1 }}>
                        All steps completed - you&apos;re finished
                     </Typography>
                     <Button onClick={handleReset}>Reset</Button>
                  </Fragmentz>
               ) : (
                  <Fragmentz>
                     <Typography sx={{ mt: 1, mb: 1 }}>
                        Step {activeStep + 1}
                     </Typography>

                     <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mt: 0 }}
                     >
                        Back
                     </Button>

                     <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                     </Button>
                  </Fragmentz>
               )}
            </BottomPanel>
         </Layout>
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   margin-top: 5px;
   max-width: 100%;
   height: 100%;
`;
const Layout = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0;
   width: 100%;
`;
const Layout1 = styled.div`
   display: flex;
   flex-direction: column;
   box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.11);
   width: 400px;
   border-radius: 0px;
   margin: 5px;
`;
const BodyNav = styled.div`
   box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.11);
   display: flex;
   border-radius: 0px;
   margin: 5px;
   width: 90%;
   padding: 0px, 10px;
   flex-direction: column;
   background: transparent;

   h1 {
      font-size: 20px;
      font-weight: 300;
      color: grey;
   }
`;
const TopPanel = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   padding: 5px;
`;
const LineFormart = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 5px;
`;
const SidePanels = styled.div`
   display: flex;
   flex-direction: row;
`;
const FormContWraper = styled.div`
   display: flex;
   flex-direction: column;
   span {
      font-size: 13px;
   }
`;
const FormContainer = styled.div`
   display: grid;
   padding: 10px 10px;
   border-radius: 0px;
   border: 2px;
   gap: 5px;
   flex-wrap: wrap;
   background-color: transparent;

   h1 {
      font-size: 1.2rem;
      color: rgb(77, 1, 77);
      text-align: center;
   }
`;
const Fragmentz = styled.div`
   display: flex;
   justify-content: space-evenly;
   width: 100%;
`;

const FormContainer1 = styled.div`
   display: flex;
   margin: 0;
   padding: 10px;
   gap: 10px;
   flex-wrap: wrap;

   background-color: transparent;

   h1 {
      font-size: 1.2rem;
      color: rgb(77, 1, 77);
      text-align: center;
   }
`;
const BottomPanel = styled.div`
   display: flex;
   width: 100%;
   bottom: 0;
   position: absolute;
`;
export default AddContract;
