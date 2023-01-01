import React from "react";

export default function FaqAnswer(props) {
  const { content } = props;
  return <div className='faq-answer'>{content}</div>;
}
