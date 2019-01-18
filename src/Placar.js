import React from 'react';

const Placar = (props) => {
  const {numberQuestions, numberCorrect} = props;
  return (
    <p className="text">{`${numberCorrect} / ${numberQuestions}`}.</p>
 	)
}

export default Placar;