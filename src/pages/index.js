import React from "react";
import styled from "styled-components";
import Settings from "../components/settings";
import Preview from "../components/preview";

const Page = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
`;

const CodeSnippet = styled.div`
  grid-area: 2 / 1 / 3 / span 2;
`;

const IndexPage = () => (
  <Page>
    <Preview />
    <Settings />
    <CodeSnippet>Copy paste the code snippet from here</CodeSnippet>
  </Page>
);

export default IndexPage;
