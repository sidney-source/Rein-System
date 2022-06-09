import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn";

const Login = (props) => {
   const [modalOpen, setModalOpen] = useState(false);
   return (
      <Container>
         <Nav>
            <a href="/">
               <img src="/images/Logo1.png" className="Images" alt="" />
            </a>
            <div>
               {/* <Join>Join now</Join> */}
               <SignIns
                  onClick={() => {
                     setModalOpen(true);
                  }}
               >
                  Sign In
               </SignIns>
            </div>
         </Nav>
         <Section>
            <Hero>
               <h1>Welcome to Sidel Insurance Portal</h1>
               <img src="/images/Login-hero.svg" alt="" />
            </Hero>
         </Section>
         {modalOpen && <SignIn setOpenModal={setModalOpen} />}
      </Container>
   );
};
const Container = styled.div`
   padding: 0px;
   height: 100vh;
   width: 100vw;
`;

const Nav = styled.div`
   max-width: 1128px;
   margin: auto;
   display: flex;
   align-items: Center;
   justify-content: space-between;
   white-space: normal;
   position: relative;
   padding: 10px 0 18px;

   img {
      width: auto;
      height: 60px;
      top: 5px;
   }

   & > a {
      width: 135px;
      height: 10px;
      @media (max-width: 768px) {
         padding: 0 5px;
      }
   }
`;

const SignIns = styled.a`
   font-size: 18px;
   box-shadow: inset 0 0 0 1px #0a66c2;
   color: #0a66c2;
   font-family: "Lucida Sans";
   border-radius: 24px;
   transition-duration: 167ms;
   font-weight: 600;
   line-height: 40px;
   padding: 10px 24px;
   text-align: center;
   cursor: pointer;
   background-color: rgba(0, 0, 0, 0);
   &:hover {
      background-color: rgba(112, 181, 249, 0.15);
      color: #0a66c2;
      text-decoration: none;
   }
`;

const Section = styled.section`
   display: flex;
   align-content: start;
   min-height: 700px;
   padding-top: 40px;
   padding-bottom: 138px;
   padding: 60px 0px;
   position: relative;
   flex-wrap: wrap;
   width: 100%;
   max-width: 1128;
   margin: auto;
   align-items: center;
`;

const Hero = styled.div`
   width: 100%;
   h1 {
      padding-bottom: 0px;
      width: 100%;
      margin-left: 110px;
      font-size: 40px;
      font-family: "Lucida Sans";
      font-weight: 200;
      line-height: 60px;
      color: #2153cc;
   }

   img {
      z-index: -1;
      width: 60%;
      position: relative;
      bottom: -2px;
      right: -450px;
      top: -130px;
   }
`;

export default Login;
