import styled from "styled-components";

const Quote = (props) => {
  return (
    <Container>
      <Layout>
        <RightContents>
          <a>Quote Generation</a>
        </RightContents>
        <LeftContents>
          <a>Ellgeo Seagon Quote</a>
          <a>Non Binding Indication</a>
          <h1>Quote Letter</h1>
          <p>
            We refer to our discussions on your placement structure and the
            reinsurers to be used to address your requirements. After taking
            these into account and/or your instructions we have obtained as
            follows the quote which we are recommending to you.
          </p>
          <p>
            Please read the notes given alongside the quote which give further
            information on any terms and conditions, exclusions, subjectivities
            and warranties which the Reinsurer(s) has/have stipulated.
          </p>
          <p>
            Please review this quote to confirm that it accurately reflects your
            coverage, conditions, limits and other terms. If you are not in
            agreement with any of its provisions, please advise us immediately.
          </p>
          <p>
            Since this is a quote, it may not constitute confirmation of full or
            further support at these terms, nor does it confirm actual
            reinsurance cover. We therefore look forward to confirmation of firm
            order from you as soon as possible so that we can bind cover at
            these terms and have sufficient time to seek additional support from
            Reinsurers.
          </p>
          <h1>Choice of Reinsurer(s)</h1>
          <p>
            This quotation was obtained from the Reinsurer we approached based
            on our knowledge and experience of the market sector. A list of the
            Reinsurers we use can be provided to you upon request. We confirm we
            are not contractually obliged to recommend reinsurance cover only
            with the reinsurer(s) we have recommended to you.
          </p>
          <h1>Validity of quote</h1>
          <p>
            This quote has no expiration date; however, insurers may withdraw or
            vary it at any time unless specified otherwise in the covering
            e-mail in which case the date of validity will be advised (after
            which insurers may withdraw or vary it). You are advised that we
            will not be responsible for any consequences that may arise from any
            delay or failure by you to respond to us.
          </p>
          <h1>Premium</h1>
          <p>
            The premium quoted for this (re)insurance and their method of
            payment will be outlined in the covering e-mail. Premium payment
            terms will be advised in our cover confirmation advice. However,
            EllGeo Re (Mauritius) Limited will not be responsible for any
            consequences that may arise from any delay or failure by you to pay
            us the amount payable by the indicated date.
          </p>
          <h1>Disclosure of material facts</h1>
          <p>
            his quote is based on the information you provided to us and on
            which both we and the (re)insurers have relied. If you and/or your
            client have not provided to us all material information or you
            discover that the information you and/or your client have provided
            is inaccurate, please advise us immediately in order that we may
            seek revalidation of terms with (re)insurers. We take this
            opportunity to remind you that your client has a duty, to disclose
            all information which is material to your coverage requirements, or
            which might influence (re)insurers in deciding to accept your
            business, finalising the terms to apply and/or the cost of cover.
            Failure to make such disclosure may allow insurers to avoid the
            policy. This is an ongoing responsibility throughout the duration of
            your client’s policy.
          </p>
          <p>
            EllGeo Re (Mauritius) Limited is licensed and regulated by the
            Financial Services Commission (FSC).
          </p>
          <p>
            Should you have any further questions to ask, please feel free to
            contact us otherwise we look forward to receiving your instructions
            of the above.
          </p>
        </LeftContents>
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  max-width: 100%;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  height: auto;
  background-color: whitesmoke;
`;
const RightContents = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  width: 50%;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid black;
  border-radius: 1px solid black;
`;
const LeftContents = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  width: 50%;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid black;
  overflow-y: scroll;
  word-wrap: break-word;
  p {
    font-size: 12px;
  }
  a {
    text-align: center;
    font-weight: bolder;
  }
  h1 {
    font-weight: bold;
  }
`;
export default Quote;
