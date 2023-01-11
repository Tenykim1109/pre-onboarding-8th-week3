import React from "react";
import styled from "styled-components";

function AutoComplete() {
  return (
    <StAutoCompleteContainer>
      <div style={{ textAlign: "start" }}>추천 검색어</div>
      <StDivider />
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>검색어 없음</li>
      </ul>
    </StAutoCompleteContainer>
  );
}

export default AutoComplete;

const StAutoCompleteContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  width: 458px;
  z-index: 3;
  position: absolute;
  top: 85px;
  padding: 16px;
`;

const StDivider = styled.div`
  height: 1px;
  background-color: lightgray;
  margin: 4px 0 4px;
`;
