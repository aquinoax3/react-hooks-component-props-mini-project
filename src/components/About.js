import React from "react";

function About({ blogImage = "https://via.placeholder.com/215", blogAbout }) {
  return (
    <aside>
      <img src={blogImage} alt="blog logo"></img>
      <p>{blogAbout}</p>
    </aside>
  );
}

export default About;
