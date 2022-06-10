import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
export const ClientDetailsPage = (props) => {
   return (
      <Containerd>
         <Paper
            elevation={1}
            variant="outlined"
            sx={{
               p: 0.5,

               display: "grid",
               gridTemplateColumns: { md: "1fr 1fr" },
               gap: 1,
               margin: 0.5,
            }}
         >
            <Grid
               sx={{
                  p: 0.5,
                  display: "grid",
                  gap: 2,
               }}
            >
               <DetailsCont>
                  <h1>Client Details</h1>
                  <BtnGrp1>
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
                     <IconButton
                        aria-label="delete"
                        color="success"
                        size="small"
                     >
                        <DeleteIcon size="large" color="error" />
                     </IconButton>
                     <IconButton
                        aria-label="delete"
                        color="success"
                        size="small"
                     >
                        <SaveTwoToneIcon color="success" />
                     </IconButton>
                  </BtnGrp1>
               </DetailsCont>
            </Grid>
            <Grid
               sx={{
                  p: 0.5,
                  bgcolor: "green",
                  display: "grid",
                  gap: 1,
               }}
            >
               hi
            </Grid>
         </Paper>
         <Paper
            elevation={1}
            variant="outlined"
            sx={{
               p: 2,
               bgcolor: "lightblue",
               display: "grid",
               gridTemplateColumns: { md: "1fr 1fr" },
               gap: 1,
               margin: 0.5,
            }}
         >
            <Grid>hi</Grid>
         </Paper>
      </Containerd>
   );
};

const Containerd = styled.div`
   margin: 0px;
`;
const DetailsCont = styled.div`
   display: flex;
   align-items: baseline;
   justify-content: space-between;
   vertical-align: middle;
`;
const BtnGrp1 = styled.div`
   display: flex;
   vertical-align: middle;
   align-items: center;
   justify-content: center;
   gap: 3px;
`;
export default ClientDetailsPage;
