import styled from "styled-components";

const Quote = (props) => {
  return (
    <Container>
      <Layout>
        <contents>
          <a>Hello World</a>
        </contents>
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  max-width: 100%;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 100%;
  white-space: nowrap;
  background-color: whitesmoke;
`;
const contents = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid blue;
`;
export default Quote;
