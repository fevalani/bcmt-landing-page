import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Content({ content, selectedTitle }) {
  const contents = content;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    createPage();
  });

  function selectedContent(title) {
    return contents.filter((element) => element.title === title)[0];
  }

  function createPage() {
    const content = selectedContent(selectedTitle);
    setTitle(content.title);
    setText(content.text);
  }

  return (
    <Container>
      <span>{title}</span>
      <p onClick={() => console.log(" ")}>{text}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 50px 50px;

  span {
    font-size: 35px;
    color: #003366;

    margin-bottom: 50px;
    text-decoration: overline;
  }

  p {
    font-size: 20px;
    text-align: justify;
    line-height: 2;
    text-indent: 50px;
    word-wrap: break-word;
    display: inline-block;
  }
`;
