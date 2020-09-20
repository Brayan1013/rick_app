import React from "react";

export const Card = ({ created, gender, image, name, status }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={image} alt="rick" />
      </div>
      <div className="card-body">
        <h4>Name: {name}</h4>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Created: {created}</p>
      </div>
    </div>
  );
};
