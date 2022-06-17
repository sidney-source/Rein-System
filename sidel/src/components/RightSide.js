import React from "react";
import FacDebit from "./FacDebit";
import styled from "styled-components";
import Dashboard from "./inputComponents/Dashboard";

const RightSide = (props) => {
   return (
      <Container>
         <Dashboard />
         {/* <FacDebit /> */}
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   margin: 0px;
   padding: 0px;
   flex-direction: row;
   width: 100%;
   overflow-y: scroll;
   max-height: calc(100vh - 24px);
`;

export default RightSide;
