import React from "react";

export default function FaqQuestion(props) {
  const { content } = props;
  return <div className="faq-question">{content}</div>;
}
