import React from "react";
import LeftSide from "./LeftSide";
import styled from "styled-components";
import RightSide from "./RightSide";
import Header from "./Header";
const Home = (props) => {
   return (
      <Layout>
         <Header />
         <Layout2>
            <LeftSide />
            <RightSide />
         </Layout2>
      </Layout>
   );
};

const Layout2 = styled.div`
   display: flex;
   flex-direction: row;
   background-color: transparent;
   margin: 5;
   overflow-y: hidden;
   overflow-x: hidden;

   @media (max-width: 768px) {
      display: flex;
      padding: 0 5px;
   }
`;
const Layout = styled.div`
   display: flex;
   flex-direction: column;
   background-color: transparent;
   margin: 0;
`;

export default Home;
