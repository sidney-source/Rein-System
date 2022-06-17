import React from "react";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { Link, withRouter } from "react-router-dom";
const Header = (props) => {
   return (
      <Container>
         <Content>
            <img src="/images/Logo1.png" className="Images" alt="" />

            <Nav>
               <NavListWrap>
                  {/* // Home Icon */}

                  <NavList>
                     <Tooltip
                        title="home"
                        arrow
                        enterDelay={100}
                        leaveDelay={100}
                        placement="bottom-start"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="25"
                           fill="currentColor"
                           class="bi bi-house"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                           />
                           <path
                              fill-rule="evenodd"
                              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                           />
                        </svg>
                     </Tooltip>
                  </NavList>

                  {/* // Security Icon */}
                  <NavList>
                     <Tooltip
                        title="Security"
                        arrow
                        enterDelay={100}
                        leaveDelay={100}
                        placement="bottom-start"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="25"
                           fill="currentColor"
                           class="bi bi-shield-lock"
                           viewBox="0 0 16 16"
                        >
                           <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                           <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                        </svg>
                     </Tooltip>
                  </NavList>
                  {/* // Notification Icon */}
                  <NavList>
                     <Tooltip
                        title="home"
                        arrow
                        enterDelay={100}
                        leaveDelay={100}
                        placement="bottom-start"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="25"
                           fill="currentColor"
                           class="bi bi-chat-left-dots"
                           viewBox="0 0 16 16"
                        >
                           <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                           <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                     </Tooltip>
                  </NavList>
                  <Link to="/Login">
                     <Tooltip title="Log out">
                        <IconButton
                           size="medium"
                           color="warning"
                           variant="outlined"
                           sx={{ paddingleft: 0 }}
                        >
                           <LogoutIcon />
                        </IconButton>
                     </Tooltip>
                  </Link>
               </NavListWrap>
            </Nav>
         </Content>
      </Container>
   );
};

const Container = styled.div`
   background-color: transparent;
   margin-left: 0px;
   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
   left: 0;
   padding-left: 5px 0;
   padding-bottom: 5px;
   position: relative;
   width: 100%;

   white-space: nowrap;
   align-items: center; ;
`;
const Content = styled.div`
   display: flex;
   align-items: center;
   height: 35px;
   margin-left: 2px;
   margin-right: 20px;
   min-height: 100%;
   h6 {
      background-color: transparent;
      display: flex;
      padding: 5px;
      margin-top: 10px;
      margin-left: -10px;
      align-content: center;
      margin-right: 30px;
      height: 30px;
      font-size: 25px;
      pointer-events: none;
      cursor: pointer;
   }
   img {
      object-fit: contain;
      margin-top: 5px;
      height: inherit;
      cursor: pointer;
   }
`;

const Nav = styled.nav`
   margin-left: auto;
   display: block;
   @media (max-width: 768px) {
      position: fixed;
      left: 0;
      bottom: 0;
      background: white;
      width: 100%;
   }
`;
const NavList = styled.div`
   display: flex;
   align-items: center;
   font-size: 25px;
   color: black;
   cursor: pointer;
   :hover {
      color: blue;
   }
   label:hover::before {
      content: attr(for);
      font-family: Roboto, -apple-system, sans-serif;
      text-transform: capitalize;
      font-size: 11px;
      position: absolute;
      top: 100%;
      left: 20%;
      height: 10px;
      width: 60px;
      right: 0;
      opacity: 0.65;
      background-color: rgb(22, 52, 166);
      color: #fff;
      padding: 4px;
      text-align: center;
      border-radius: 3px;
      display: block;
   }
`;
const NavListWrap = styled.ul`
   display: flex;
   flex-wrap: nowrap;
   list-style-type: none;
   position: relative;
   gap: 20px;
   .active {
      span:after {
         content: "";
         transform: scaleX(1);
         border-bottom: 2px solid var(--white, #fff);
         bottom: 0;
         left: 0;
         position: absolute;
         transition: transform 0.2s ease-in-out;
         width: 100%;
         border-color: rgba(0, 0, 0, 1.3);
      }
   }
`;

const User = styled.div`
   font-size: 16px;
   box-shadow: inset 0 0 0 1px #0a66c2;
   color: #0a66c2;
   border-radius: 10px;
   transition-duration: 167ms;
   font-weight: 400;
   padding: 7px;
   text-align: center;
   width: 70px;
   outline: none;
   margin: 10px 10px 10px 10px;
   background-color: transparent;
   button {
      outline: none;
      background-color: transparent;
   }
   &:hover {
      background-color: rgba(17, 62, 168);
      color: white;
      text-decoration: none;
      cursor: pointer;
   }
`;

export default Header;
