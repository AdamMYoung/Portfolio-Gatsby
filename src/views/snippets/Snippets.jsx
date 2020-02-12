import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "highlight.js/styles/color-brewer.css";

import { getSnippets } from "../../api/contentfulApi";

import ScrollList from "../components/scoll-list/ScrollList";
import Title from "../components/Title";
import Snippet from "../components/snippet/Snippet";
import Highlight from "react-highlight.js";

const Snippets = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const loadSnippets = async () => {
      const loadedSnippets = await getSnippets();
      console.log(loadedSnippets);

      setSnippets(loadedSnippets);
    };

    loadSnippets();
  }, []);

  return (
    <Container fluid style={{ padding: 15 }}>
      <Row>
        <Col>
          {/* Title */}
          <Title title="Snippets">
            <Row>
              <Col cs={12} sm={8} md={6} lg={4}>
                <h4>
                  Below you'll find a collection of code snippets that I've either created or came across that I've found useful.
                </h4>
                <h5>Feel free to use them if they help!</h5>
              </Col>
            </Row>
          </Title>

          <ScrollList>
            {snippets.map(language => (
              <ScrollList.Entry title={language.fields.title}>
                {language.fields.groups &&
                  language.fields.groups.map(group => (
                    <ScrollList.Section title={group.fields.title}>
                      {group.fields.snippets &&
                        group.fields.snippets.map(snippet => (
                          <Snippet title={snippet.fields.title}>
                            <p>{snippet.fields.description}</p>
                            <Highlight>
                              <pre>
                                <code>{snippet.fields.code}</code>
                              </pre>
                            </Highlight>
                          </Snippet>
                        ))}
                    </ScrollList.Section>
                  ))}
              </ScrollList.Entry>
            ))}
          </ScrollList>
        </Col>
      </Row>
    </Container>
  );
};

export default Snippets;
