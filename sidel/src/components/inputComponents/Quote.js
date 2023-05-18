import styled from "styled-components";

const Quote = (props) => {
  return (
    <Container>
      <Layout></Layout>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  position: relative;
  max-width: 100%;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  white-space: nowrap;
`;
export default Quote;
