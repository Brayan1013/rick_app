import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-body">
        <h1>Seasons: 4</h1>
        <h1>Creators: Dan Harmon</h1>
      </div>
      <div className="social-media">
        <h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rickandmorty/?hl=es-la"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </h1>
        <h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://es-la.facebook.com/RickandMorty/"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
        </h1>
        <h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/rickandmorty"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </h1>
      </div>
    </footer>
  );
};
