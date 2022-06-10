import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import AddContract from "./inputComponents/AddContract";
import SearchTable from "./inputComponents/Table";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { IconButton, Button, Divider, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClientDetailsPage from "./inputComponents/ClientDetails";
const FacDebit = (props) => {
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
   const [modalOpen, setModalOpen] = useState(false);
   const [query, setQuery] = useState("");

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
   const Search = (data) => {
      return data.filter((item) =>
         keys.some((key) => item[key].toLowerCase().includes(query))
      );
   };
   return (
      <Container>
         <Layout>
            <Nav>
               {/* Back Button */}
               <Button
                  onClick={() => {
                     setModalOpen(false);
                  }}
                  size="inherit"
                  sx={{
                     width: "70px",
                     height: 35,
                     fontSize: "13px",
                     padding: "0 15px",
                  }}
                  variant="outlined"
                  endIcon={<ArrowBackIcon />}
               >
                  Back
               </Button>
               {/* Search Field */}
               <Paper
                  component="form"
                  elevation={0}
                  variant="outlined"
                  sx={{
                     p: "2px 2px",
                     display: "flex",
                     alignItems: "center",
                     width: 400,
                     height: 30,
                     backgroundColor: "#f3e5f5",
                  }}
               >
                  <InputBase
                     sx={{ ml: 1, flex: 1 }}
                     placeholder="Search Risk"
                     inputProps={{ "aria-label": "Search risk" }}
                     onChange={(e) => setQuery(e.target.value.toLowerCase())}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                     type="submit"
                     sx={{ p: "5px" }}
                     aria-label="search"
                  >
                     <SearchIcon />
                  </IconButton>
               </Paper>
               {/* Create Button */}
               <Button
                  onClick={() => {
                     setModalOpen(true);
                  }}
                  variant="outlined"
                  size="inherit"
                  sx={{
                     width: "90px",
                     height: 35,
                     fontSize: "13px",
                     padding: "0 15px",
                  }}
                  startIcon={<CreateNewFolderIcon />}
               >
                  Create
               </Button>
            </Nav>

            {/* Switching Between Search mODAL & Create Contract Modal */}
            {!modalOpen && (
               <SearchTable data={Search(Users)} setOpenModal={setModalOpen} />
            )}
            {modalOpen && <ClientDetailsPage setOpenModal={setModalOpen} />}
         </Layout>
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   margin: 0;
   width: 100%;
   position: relative;
   max-width: 1230px;
`;
const Layout = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0;
   width: 100%;
   white-space: nowrap;
`;

const SearchDiv = styled.div`
   display: flex;
   width: 600px;
   align-items: center;
   position: relative;
   justify-content: center;
   gap: 5px;
   svg {
      color: blue;
      left: 0;
      position: absolute;
   }
`;

const Nav = styled.nav`
   display: flex;
   padding: 5px;
   justify-content: space-between;
   border-bottom: 1px solid rgba(0, 0, 0, 0.08);

   span {
      cursor: pointer;
   }
`;
const TopNavListWrap = styled.ul`
   display: flex;
   flex-wrap: nowrap;
   list-style-type: none;
   margin: 0px;

   width: 100%;
   justify-content: flex-end;
   cursor: pointer;

   .active {
      span:after {
         content: "";
         transform: scaleX(1);
         border-bottom: 2px solid rgba(235, 0, 0, 7);
         position: absolute;
         transition: transform 0.2s ease-in-out;
         width: 100%;
      }
   }
`;
const NavList = styled.li`
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin: 2px;

   input {
      margin: 0px;
      padding: 0px 0px 5px 10px;
      font-size: 15px;
      width: 300px;
      font-weight: lighter;
      outline: none;
      height: 100%;
      border: none;

      font-family: "Livvic", sans-serif;
      background-color: white;
      border-bottom: 2px solid rgba(0, 0, 0, 0.7);
   }

   a {
      align-items: center;
      background: rgb(0, 100, 0, 0.2);
      border-radius: 10px;
      border-style: dashed;
      border: 1px solid green;
      display: flex;
      width: 60px;
      flex-direction: column;
      font-weight: 400;
      justify-content: center;
      position: relative;
      text-decoration: none;
      cursor: pointer;
   }
   span {
      display: flex;
      font-weight: 300;
      font-size: 14px;
      padding: 5px;
      width: 45px;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px #0a66c2;
      color: #0a66c2;
      border-radius: 5px;
      transition-duration: 967ms;
      outline: none;
      background-color: transparent;
      &:hover {
         background-color: rgba(17, 62, 168);
         color: white;
         text-decoration: none;
         cursor: pointer;
      }
   }
   @media (max-width: 768px) {
      min-width: 70px;
   }
   h1 {
      font-weight: lighter;
      font-size: 25px;
      align-items: center;
      cursor: pointer;
   }

   &:hover,
   &:active {
      a {
         background-color: white;
         color: black;
         text-decoration: none;
         cursor: pointer;
      }
   }
`;

export default FacDebit;
