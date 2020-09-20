import React from "react";
import rickMorty from "../images/rick_morty.jpg";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-body">
        <div className="home-image">
          <img src={rickMorty} alt="rick and morty" />
        </div>
        <p>
          An animated series on adult-swim about the infinite adventures of
          Rick, a genius alcoholic and careless scientist, with his grandson
          Morty, a 14 year-old anxious boy who is not so smart. Together, they
          explore the infinite universes; causing mayhem and running into
          trouble.
        </p>
      </div>
    </div>
  );
};
