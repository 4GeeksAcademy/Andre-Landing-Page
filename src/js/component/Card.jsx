import React from 'react';

const Card = ({ title, des }) => {
  return (
    <div className="card text-center mb-3" style={{ maxWidth: "30rem" }}>
      <img src="https://raw.githubusercontent.com/4GeeksAcademy/Andre-Landing-Page/main/src/img/rigo-baby.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{des}</p>
        <a href="#" className="btn btn-primary border border-dark">Find Out More!</a>
      </div>
    </div>
  );
};

export default Card;
