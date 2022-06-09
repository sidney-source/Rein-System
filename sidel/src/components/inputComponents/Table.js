import React from "react";
import styled from "styled-components";

const SearchTable = ({ data }) => {
   return (
      <Container>
         <table>
            <tbody>
               <tr>
                  <th>Insured</th>
                  <th>Reference</th>
                  <th>Our Order</th>
                  <th>Period</th>
                  <th>Type</th>
                  <th>Risk Class</th>
                  <th>Currency</th>
                  <th>Status</th>
               </tr>
               {data.map((item) => (
                  <tr key={item.id}>
                     <td>{item.Insured}</td>
                     <td>{item.Reference}</td>
                     <td>{item.Our_Order}</td>
                     <td>{item.Period}</td>
                     <td>{item.Type}</td>
                     <td>{item.Risk_Class}</td>
                     <td>{item.Currency}</td>
                     <td>{item.Status}</td>
                     <td>
                        <label for="Endorse">
                           {/* <input
                              type="radio"
                              name="mode"
                              id="Endorse"
                              value="Endorse"
                              checked
                           /> */}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="green"
                              class="bi bi-plus-square"
                              viewBox="0 0 16 16"
                           >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                           </svg>
                        </label>
                     </td>
                     <td>
                        <label for="Renew">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              color="blue"
                              fill="currentColor"
                              class="bi bi-arrow-repeat"
                              viewBox="0 0 16 16"
                           >
                              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                              <path
                                 fill-rule="evenodd"
                                 d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                              />
                           </svg>
                        </label>
                     </td>
                     <td>
                        <label for="Copy">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              color="purple"
                              fill="currentColor"
                              class="bi bi-clipboard"
                              viewBox="0 0 16 16"
                           >
                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                           </svg>
                        </label>
                     </td>
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
   margin: 5px 5px 5px 5px;
   padding: 5px 5px 5px 5px;
   font-size: 1rem;
   width: 98%;
   display: flex;
   outline: none;
   font-family: "Livvic", sans-serif;
   background-color: white;
   table {
      width: 100%;
      margin: 0px 0px;
      border-spacing: 0px;
      border-collapse: collapse;
      overflow: visible;
   }
   th {
      font-size: 1rem;
      padding: 5px;
      width: auto;
      text-align: center;

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
      margin-bottom: 20px;
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.08); */
      border: 1px;

      :hover {
         background-color: rgba(205, 237, 246, 0.3);
      }
   }

   td {
      font-size: 0.8rem;
      position: relative;
      padding: 20px 0px 0px 15px;
      font-size: 15px;
      font-weight: 400;

      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      overflow: visible;
      :nth-child(7) {
         width: 50px;
      }
      :nth-child(8) {
         width: 40px;
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

export default SearchTable;
