import React from "react";
import styled from "styled-components";
import "./Dashboard.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Dashboard = (props) => {
   return (
      <Featured>
         <FeaturedItem>
            <span>Revanue</span>
            <FeaturedMoneyContainer>
               <h6>$2,415</h6>
               <h5 className="featuredMoneyRate">
                  -11.4 <ArrowDownward className="featuredIcon negative" />
               </h5>
            </FeaturedMoneyContainer>
            <label>Compared to last month</label>
         </FeaturedItem>
         <FeaturedItem>
            <span>Sales</span>
            <FeaturedMoneyContainer>
               <h6>$4,415</h6>
               <h5 className="featuredMoneyRate">
                  -1.4 <ArrowDownward className="featuredIcon negative" />
               </h5>
            </FeaturedMoneyContainer>
            <label>Compared to last month</label>
         </FeaturedItem>
         <FeaturedItem>
            <span>Cost</span>
            <FeaturedMoneyContainer>
               <h6>$2,225</h6>
               <h5>
                  +2.4 <ArrowUpward className="featuredIcon positive" />
               </h5>
            </FeaturedMoneyContainer>
            <label>Compared to last month</label>
         </FeaturedItem>
      </Featured>
   );
};
const Featured = styled.div`
   width: 100%;
   height: 20%;
   display: flex;
   justify-content: space-between;
   margin: 10px;
`;

const FeaturedItem = styled.div`
   flex: 1;
   margin: 0px 10px;
   padding: 10px;
   border-radius: 10px;
   cursor: pointer;
   -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
   box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
   span {
      font-size: 24px;
      gap: 10px;
   }
   label {
      font-size: 15px;
      color: gray;
   }
`;
const FeaturedMoneyContainer = styled.div`
   margin: 0px 0px;
   display: flex;
   align-items: center;
   h6 {
      font-size: 30px;
      font-weight: 600;
   }
   h5 {
      font-size: 20px;
      align-items: bottom;
      margin-left: 15px;
   }
`;
export default Dashboard;
