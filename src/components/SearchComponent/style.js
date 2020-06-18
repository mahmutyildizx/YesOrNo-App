import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form``;

export const StyledInput = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  line-height: 2.8rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  max-width: 80vw;
  outline: none;
`;
export const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 1.1rem 2rem;
  margin-left: 5px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 250ms;
  max-width: 20vw;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }
`;
