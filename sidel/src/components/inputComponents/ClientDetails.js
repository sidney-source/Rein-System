import { Grid, Paper, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

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
                  gap: 1,
               }}
            >
               <h1>Client Details</h1>
               <TextField
                  size="small"
                  label="Insured"
                  sx={{
                     width: 300,
                     height: 30,
                     padding: 0,
                  }}
               ></TextField>
               <TextField
                  size="small"
                  label="Insured"
                  sx={{
                     width: 300,
                     height: 30,
                     padding: 0,
                  }}
               ></TextField>{" "}
               <TextField
                  size="small"
                  label="Insured"
                  sx={{
                     width: 300,
                     height: 30,
                     padding: 0,
                  }}
               ></TextField>
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

export default ClientDetailsPage;
