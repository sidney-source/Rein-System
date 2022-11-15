import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const SignIn = ({ setOpenModal }) => {
  return (
    <Container>
      <Layout>
        <Closeic>
          <CloseIcon
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </Closeic>

        <Lock>
          <LockOpenOutlinedIcon size="large" />
        </Lock>
        <a>Sign Up</a>
        <Emailadd2>
          <TextField id="first-name" label="First Name *" size="small" />

          <TextField id="last-name" label="Last Name *" size="small" />
        </Emailadd2>
        <Emailadd>
          <TextField
            id="email-address"
            label="Email Address *"
            size="small"
            fullWidth
          />
        </Emailadd>
        <Emailadd2>
          <TextField
            id="password"
            label="Password*"
            size="small"
            type="password"
          />

          <TextField
            id="confirm"
            label="Confirm *"
            size="small"
            type="password"
          />
        </Emailadd2>
        <Link to="/Home">
          <Button variant="contained" color="success" size="large" fullWidth>
            Sign up
          </Button>
        </Link>
        <h1>Copyright © Sidel insurance Services 2022</h1>
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    0.25turn,
    rgba(0, 0, 255, 0.4),
    rgb(216, 71, 39, 0.4)
  );
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: center;
`;
const Layout = styled.div`
  background: whitesmoke;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border: 0px solid rgba(33, 43, 231, 0.82);
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  height: 400px;
  width: 300px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    height: 20px;
    margin: 5px;
    align-items: center;
  }
`;
const Closeic = styled.div`
  margin: 0px;
  padding: 10px;
  right: 0;
  top: 0;
  right: 0;
  cursor: pointer;
  align-content: right;
  align-items: right;
  position: absolute;
`;

const Lock = styled.div`
  padding: 10px;
  margin: 0px;
  background-color: purple;
  border-radius: 50%;
  color: white;
  align-items: center;
  display: flex;
`;
const Emailadd = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;
const Emailadd2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;
export default SignIn;
