import React, { useState } from "react";
import AnswerComponent from "../AnswerComponent/";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledContainer
} from "./style";

function SearchComponent() {
  const [entry, setEntry] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isQuestion, setIsQuestion] = useState(true);

  const changeHandler = e => {
    setEntry(e.target.value);
    setIsEmpty(false);
    setIsQuestion(true);
    setQuestionInput("");
  };

  const submitHandler = e => {
    e.preventDefault();

    const checkEmpty =
      entry.length !== 0 ? setIsEmpty(false) : setIsEmpty(true);

    const checkBlank = entry.trimEnd();

    return checkEmpty || checkBlank.charAt(checkBlank.length - 1) === "?"
      ? (setIsQuestion(true), setQuestionInput(entry))
      : setIsQuestion(false);
  };

  const errorMessage = isEmpty ? (
    <h4>This section cannot be blank...</h4>
  ) : !isQuestion ? (
    <h4>
      It seems you did not ask a question with the correct way. <br />
      Please add a question mark at the end of the sentence and try it again(?)
    </h4>
  ) : (
    ""
  );

  return (
    <>
      <StyledContainer>
        {errorMessage}
        <StyledForm onSubmit={submitHandler}>
          <StyledInput
            className="input"
            type="text"
            name="query"
            placeholder="Ask Me"
            value={entry}
            onChange={changeHandler}
          />

          <StyledButton type="submit">Search</StyledButton>
        </StyledForm>
      </StyledContainer>

      <StyledContainer>
        {questionInput !== "" ? (
          <AnswerComponent questionInput={questionInput} />
        ) : (
          ""
        )}
      </StyledContainer>
    </>
  );
}

export default SearchComponent;
