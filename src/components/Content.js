import styled from "styled-components";
import HTMLReactParser from "html-react-parser";
import { useContext, useEffect, useState } from "react";
import SelectedTitleContext from "../context/SelectedTitleContext";

export default function Content({ content }) {
  const contents = content;
  const { selectedTitle } = useContext(SelectedTitleContext);
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
      <span>{HTMLReactParser(text)}</span>
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

  span:first-child {
    font-size: 35px;
    color: #003366;

    margin-bottom: 50px;
    text-decoration: overline;
    line-height: 1.5;
  }

  span:nth-child(2) {
    font-size: 20px;
    text-align: justify;
    line-height: 2;
    word-wrap: break-word;
    display: inline-block;
  }
`;
