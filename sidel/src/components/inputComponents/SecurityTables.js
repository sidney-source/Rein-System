import React from "react";
import styled from "styled-components";

const SecurityTable = ({ data }) => {
   return (
      <Container>
         <table>
            <tbody>
               <tr>
                  <th>Reinsurer</th>
                  <th>Written Line</th>
                  <th>Signed Line</th>
                  <th>Witholding Tax</th>
                  <th>Brokerage</th>
                  <th>Status</th>
               </tr>
               {data.map((item) => (
                  <tr key={item.id}>
                     <td>{item.Reinsurer}</td>
                     <td>{item.Written_Line}</td>
                     <td>{item.Signed_Line}</td>
                     <td>{item.WitholdingTax}</td>
                     <td>{item.Brokerage}</td>
                     <td>{item.Status}</td>
                     <td>
                        <label for="Print">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-printer"
                              viewBox="0 0 16 16"
                           >
                              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                           </svg>
                        </label>
                     </td>
                     <td>
                        <label for="Delete">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="red"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                           >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                 fill-rule="evenodd"
                                 d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                           </svg>
                        </label>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </Container>
   );
};

const Container = styled.div`
   margin: 0;
   padding: 0;
   font-size: 10px;
   width: 100%;
   display: flex;
   font-weight: lighter;
   font-family: "Roboto", sans-serif;
   background-color: transparent;
   table {
      width: 100%;
      margin: 0px 0px;
      border-spacing: 0px;
      border-collapse: collapse;
      overflow: visible;
   }
   th {
      font-size: 0.9rem;
      padding: 0px;
      width: auto;
      text-align: left;

      :nth-child(1) {
         width: 200px;
      }
      :nth-child(2) {
         width: 100px;
      }
      :nth-child(3) {
         width: 50px;
      }
      :nth-child(4) {
         width: 70px;
      }
      :nth-child(5) {
         width: 70px;
      }
      :nth-child(6) {
         width: 200px;
         align-items: left;
      }
   }
   tr {
      margin-bottom: 0px;
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.08); */
      border: 2px;

      :hover {
         background-color: #f3e5f5;
      }
   }

   td {
      font-size: 0.9rem;
      position: relative;
      padding: 0px 0px 0px 5px;

      font-weight: 300;

      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      overflow: visible;
      :nth-child(7) {
         width: 30px;
      }
      :nth-child(8) {
         width: 30px;
      }
      svg {
         size: 1rem;
         padding: 0px;
         cursor: pointer;
         title {
            border-radius: 5px;
         }
      }

      label:hover::before {
         content: attr(for);
         font-family: Roboto, -apple-system, sans-serif;
         text-transform: capitalize;
         font-size: 11px;
         position: absolute;
         top: -10%;
         left: 0;
         right: 0;
         opacity: 0.65;
         background-color: rgb(22, 52, 166);
         color: #fff;
         padding: 4px;
         text-align: center;
         border-radius: 3px;
         display: block;
      }
   }

   tbody {
      /* border-left: 1px solid rgba(0, 0, 0, 0.08); */
   }
`;

export default SecurityTable;
