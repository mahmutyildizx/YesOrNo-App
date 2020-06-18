import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { StyledContainer, StyledHeader, StyledImage, StyledGif } from "./style";

function AnswerComponent({ questionInput }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const gifSrc = "https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif";

  const fetchApi = async () => {
    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      setItems(data);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {!isLoaded ? (
        <StyledContainer>
          <StyledGif src={gifSrc} />
        </StyledContainer>
      ) : (
        <StyledContainer>
          <StyledHeader>Question: {questionInput}</StyledHeader>
          <StyledHeader>Answer: {items.answer} </StyledHeader>
          <StyledImage src={items.image} alt={`$'answer img'`} />
        </StyledContainer>
      )}
    </>
  );
}

export default AnswerComponent;

AnswerComponent.propTypes = {
  questionInput: propTypes.string
};
AnswerComponent.defaultProps = {
  questionInput: ""
};
