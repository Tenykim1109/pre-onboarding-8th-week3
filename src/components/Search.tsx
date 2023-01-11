import React from "react";
import styled from "styled-components";
import Input from "./Input";

function Search() {
  return (
    <StSearchContainer>
      <h2>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h2>
      <Input />
    </StSearchContainer>
  );
}

export default Search;

const StSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
