import { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import AutoComplete from "./AutoComplete";

function Input() {
  const [focused, setFocused] = useState(false);
  const [keyword, setKeyword] = useState("");

  return (
    <StInputContainer>
      <StInputItem focused={focused}>
        <StInputBox>
          <StInputWrapper>
            <StLabelWrapper>
              <label>
                <div
                  style={{
                    opacity: 0,
                    lineHeight: "7px",
                    fontFamily: "inherit",
                  }}
                >
                  질환명을 검색해 주세요.
                </div>
              </label>
            </StLabelWrapper>
            <StRelativeContainer>
              <StRelativeWrapper>
                <StNonPointer focused={focused || keyword.length !== 0}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <BiSearch style={{ marginRight: "12px" }} />
                    </div>
                    <div>질환명을 입력해 주세요.</div>
                  </div>
                </StNonPointer>
                <StInput
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </StRelativeWrapper>
              {focused && (
                <span
                  style={{ cursor: "pointer", color: "#a7afb7" }}
                  onMouseDown={() => {
                    console.log("click");
                    setKeyword("");
                  }}
                >
                  <AiFillCloseCircle size="20" />
                </span>
              )}
            </StRelativeContainer>
          </StInputWrapper>
        </StInputBox>
        <StSearchButton>
          <BiSearch size="24" />
        </StSearchButton>
        {focused && <AutoComplete />}
      </StInputItem>
    </StInputContainer>
  );
}

export default Input;

const StInputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 490px;
  margin: 0 auto;
`;

const StInputItem = styled.div<{ focused: boolean }>`
  border-radius: 42px;
  border: 2px solid;
  border-color: ${(props) => (props.focused ? `#007be9` : `#ffffff`)};
  background-color: #ffffff;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  width: 100%;
  position: relative;
  padding-right: 8px;
`;

const StSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 0;
  background-color: #007be9;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  -webkit-box-pack: center;
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  font-size: 1.125rem;
  letter-spacing: -0.018rem;
  line-height: 1.6;
  padding: 20px 10px 20px 24px;
  font-weight: 400;
`;

const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StLabelWrapper = styled.div`
  font-family: inherit;
`;

const StRelativeContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;

const StRelativeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StNonPointer = styled.div<{ focused: boolean }>`
  color: #a7afb7;
  position: absolute;
  pointer-events: none;
  opacity: ${(props) => (props.focused ? 0 : 1)};
`;

const StInput = styled.input`
  flex: 1;
  border: 0;
  background-color: transparent;
  width: 100%;
  outline: none;
  font-size: 100%;
`;
