import React, { useEffect, useState } from "react";
import { marked } from "marked";

const ReadmeViewer = ({ username, repository }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    // Fetch the README.md file from the GitHub repository
    fetch(
      `https://raw.githubusercontent.com/${username}/${repository}/main/README.md`
    )
      .then((response) => response.text())
      .then((markdown) => {
        // Convert Markdown to HTML
        const htmlContent = marked(markdown);

        // Update the state with the HTML content
        setHtml(htmlContent);
      });
  }, [username, repository]);

  return (
    <div
      className="readme-contents"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ReadmeViewer;
